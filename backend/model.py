import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report
from sklearn.preprocessing import MinMaxScaler
import joblib

#KNN model
class KNNmodel:
    def __init__(self):
        # Initialize the model (KNN Classification Model)
        self.model = KNeighborsClassifier(n_neighbors=13)   #best n neighbors=13 from assignment 2

    def process_and_train(self):
        #Load the melbourne housing dataset
        data = pd.read_csv('melbourne_housing.csv')

        #Delete Duplicates if any
        data.drop_duplicates(inplace=True)


        #FILTERING DATA
        #Drop unused columns
        data.drop(columns=['CouncilArea', 'Bedroom2', 'Suburb', 'Postcode', 'Propertycount', 'SellerG', 'Method', 'Date', 'Address'], inplace=True)

        #Only want data with Regionname = Southern Metropolitan
        data = data[data['Regionname'] == 'Southern Metropolitan']

        #Delete rows with missing values
        data.dropna(subset=['Car'], inplace=True)
        data.dropna(subset=['BuildingArea'], inplace=True)

        #Fill missing values for YearBuilt using median
        data['YearBuilt'].fillna(data['YearBuilt'].median(), inplace=True)

        #Removing outliers function using IQR
        def remove_outliers_IQR(data, column):
            # Calculate Q1 and Q3
            Q1 = data[column].quantile(0.25)
            Q3 = data[column].quantile(0.75)

            # Calculate IQR
            IQR = Q3 - Q1

            # Calculate lower and upper bounds
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR

            #Handling outliers, by removing data entries with Building area outside the lower and upper bound
            filtered_data = data[(data[column] >= lower_bound) & (data[column] <= upper_bound)]

            return filtered_data

        #Remove Outliers
        data = remove_outliers_IQR(data, 'BuildingArea')
        data = remove_outliers_IQR(data, 'Car')
        data = remove_outliers_IQR(data, 'Rooms')
        data = remove_outliers_IQR(data, 'Bathroom')
        data = remove_outliers_IQR(data, 'Price')


        #DATA TRANSFORMATION
        #Affordable vs Expensive House Category
        #Define threshold based on median price
        price_threshold = data['Price'].median()
        #Create a new column 'Price_Category' where: 0 is Affordable, 1 is Expensive
        data['Price_Category'] = data['Price'].apply(lambda x: 0 if x <= price_threshold else 1)

        #Mapping 'Type': unit - 1, townhouse - 2, house - 3
        type_mapping = {'u': 1,'t': 2,'h': 3}
        data['Type'] = data['Type'].map(type_mapping)

        #Selected features are: 'Rooms', 'BuildingArea', 'Type', 'YearBuilt', 'Bathroom', 'Car'
        #Therefore, drop features that are not selected
        data.drop(columns=['Landsize', 'Lattitude', 'Distance', 'Longtitude', 'Regionname'], inplace=True)

        #Save processed dataset
        data.to_csv('processed_melbourne_housing.csv', index=False)

        
        #DATA SPLITTING
        features = ['Rooms', 'BuildingArea', 'Type', 'YearBuilt', 'Bathroom', 'Car'] #features selected
        X = data[features]   
        y = data['Price_Category']  # Target variable

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        #Scale Data
        scaler = MinMaxScaler()
        X_train_scaled = scaler.fit_transform(X_train)  # Scale the training set

        #TRAIN
        #Train the model
        self.model.fit(X_train_scaled, y_train)

        #Save the model
        joblib.dump(self.model, 'KNNmodel.pkl')

        #Evaluation
        predictions = self.model.predict(X_train_scaled)
        print('KNN\n',classification_report(y_train, predictions))

    def predict(self, rooms, buildingArea, type, yearBuilt, bathroom, carspace):
        #Load the model
        model = joblib.load('KNNmodel.pkl')

        #Make prediction based on input
        return model.predict([[rooms, buildingArea, type, yearBuilt, bathroom, carspace]])
    
#Example usage for initial training
if __name__ == "__main__":
    model = KNNmodel()
    model.process_and_train()
