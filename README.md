# RAIN PREDICTION 

Mobile App use React Native for predict rain by RandomForest models. Causes it too large to upload the model, you can follow these step to download the model and test my app. The notebook I put in backend folder too.

![screenshot](./screenshot/screenshot.png)

1. Please download model into the folder backend from link: https://drive.google.com/drive/folders/1R9HkhMO3MlZG26V8CTMgVWD0zx_Q8hnS?usp=sharing

2. Cd to folder backend and run the following command:
``` bash
uvicorn api:app --reload
```
3. Cd to folder frontend and run the following command if you use ios simulator:
```bash
yarn run ios
```
Or the following command if you want to use android simulator:
```
yarn run android
```
