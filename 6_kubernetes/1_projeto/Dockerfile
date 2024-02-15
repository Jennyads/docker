FROM python:3

RUN apt-get update -y && \
    apt-get install -y python3-pip

WORKDIR /app

RUN pip3 install Flask

COPY . .

EXPOSE 5000

CMD [ "python3", "./app.py"]
