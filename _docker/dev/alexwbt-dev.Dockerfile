FROM node:18-alpine3.16


WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i
