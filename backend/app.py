from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.ensemble import RandomForestClassifier
import uvicorn

import joblib

app = FastAPI()
loaded_rf = joblib.load(open("weather_random_forest.joblib", "rb"))


class Indicators(BaseModel):
    province: int
    t_max: int
    t_min: int
    wind: int
    wind_d: int
    rain_today: int
    humidi: int
    cloud: int
    pressure: float
    day: float
    dayofweek: float
    month: float


@app.get("/")
def read_root():
    return "Welcome"


@app.post("/predict")
def read_item(indicators: Indicators):
    return {"result": int(loaded_rf.predict([[indicators.province, indicators.t_max, indicators.t_min, indicators.wind, indicators.wind_d, indicators.rain_today, indicators.humidi, indicators.cloud, indicators.pressure, indicators.day, indicators.dayofweek, indicators.month]])[0])}


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=4000, debug=True)
