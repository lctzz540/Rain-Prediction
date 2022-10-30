FROM python:3
WORKDIR /Users/thangle/Documents/weather/backend
COPY . .
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["uvicorn","app:app", "--host=0.0.0.0", "--reload"]
