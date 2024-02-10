#!/bin/bash
docker kill jalbarracin

docker container rm jalbarracin

git pull origin main

npm run build

docker image rm nginx-jalbarracin

docker build -t nginx-jalbarracin .

docker run -d -p 8080:80 --name jalbarracin nginx-jalbarracin