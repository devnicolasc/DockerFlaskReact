FROM python:3.9.1

WORKDIR /app

ENV FLASK_APP=app.py

ENV FLASK_ENV=development

COPY ./server/requirements.txt .

RUN pip install -r requirements.txt

COPY ./server .

CMD ["python", "app.py"]