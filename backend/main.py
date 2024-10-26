from fastapi import FastAPI, HTTPException, Depends, Request
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi import BackgroundTasks
import time

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}