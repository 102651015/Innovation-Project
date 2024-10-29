from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, conint, constr, ValidationError
from typing import Literal
from model import KNNmodel

app = FastAPI()

#Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  #URL of React application
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Initialize model
model = KNNmodel()

#Prediction input model with validation
class prediction_input(BaseModel):
    rooms: conint(ge=0)         #Non-negative integer
    buildingArea: conint(ge=0)  #Non-negative integer
    type: Literal[1, 2, 3]      #Only allows integers 1, 2, or 3 for type, where: 1 - unit, 2 - house, 3 - townhouse
    yearBuilt: conint(ge=0)     #Non-negative integer
    bathroom: conint(ge=0)      #Non-negative integer
    carspace: conint(ge=0)      #Non-negative integer

@app.get("/")
async def root():
    return {"message": "Welcome to the Southern Metropolitan Region House Category Prediction API"}

@app.post("/predict/")
async def predict_price(input: prediction_input):
    try:
        #Category, where: 0 is Affordable, and 1 is Expensive
        category = int(model.predict(input.rooms, input.buildingArea, input.type, 
                                      input.yearBuilt, input.bathroom, input.carspace)[0])
        category_string = 'Affordable' if category == 0 else 'Expensive'
        return {"predicted_category": category_string}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
