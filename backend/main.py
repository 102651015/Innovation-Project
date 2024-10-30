from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,Field, conint, constr, ValidationError
from typing import Literal, Annotated
from model import KNNmodel
from fastapi import Request

app = FastAPI()

#Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  #URL of React application
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

#Initialize model
model = KNNmodel()

#Prediction input model with validation
class prediction_input(BaseModel):
    rooms: Annotated[int, Field(ge=0)]         # Non-negative integer
    buildingArea: Annotated[int, Field(ge=0)]  # Non-negative integer
    type: Literal[1, 2, 3]                     # Only allows integers 1, 2, or 3
    yearBuilt: Annotated[int, Field(ge=0)]     # Non-negative integer
    bathroom: Annotated[int, Field(ge=0)]      # Non-negative integer
    carspace: Annotated[int, Field(ge=0)]      # Non-negative integer

@app.get("/")
async def root():
    return {"message": "Welcome to the Southern Metropolitan Region House Category Prediction API"}

@app.post("/predict")
async def predict_category(input: prediction_input, request: Request):
    # Print the received data for debugging
    data = await request.json()
    print("Received data:", data)
    try:
        # Category, where: 0 is Affordable, and 1 is Expensive
        category = int(model.predict(input.rooms, input.buildingArea, input.type, 
                                      input.yearBuilt, input.bathroom, input.carspace)[0])
        category_string = 'Affordable' if category == 0 else 'Expensive'
        return {"predicted_category": category_string}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
