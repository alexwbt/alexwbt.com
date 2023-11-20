FROM node:18-alpine3.16 as BUILDER

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .
