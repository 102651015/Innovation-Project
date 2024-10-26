from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import KNNmodel

app = FastAPI()

#Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # URL of React application
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Initialize model
model = KNNmodel()

@app.get("/")
async def root():
    return {"message": "Welcome to the Southern Metropolitan Region House Category Prediction API"}

@app.get("/predict/{rooms}/{buildingArea}/{type}/{yearBuilt}/{bathroom}/{carspace}")
async def predict_price(rooms: int, buildingArea: int, type: int, yearBuilt: int, bathroom: int, carspace: int):
    #Category, where: 0 is Affordable, and 1 is Expensive
    category = int(model.predict(rooms, buildingArea, type, yearBuilt, bathroom, carspace)[0])
    if category == 0:
        category_string = 'Affordable'
    else:
        category_string = 'Expensive'
    return {"predicted_category": category_string}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
