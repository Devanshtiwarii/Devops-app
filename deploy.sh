#!/bin/bash

docker stop prod || true
docker rm -f prod || true

docker pull localhost:5000/devops-app:v1

docker run -d \
  --name prod \
  -p 4000:3000 \
  localhost:5000/devops-app:v1

