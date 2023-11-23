#!/bin/bash

rm -rf ./alexwbt/node_modules ./alexwbt-api/node_modules

docker cp alexwbt-dev:/app/node_modules ./alexwbt
docker cp alexwbt-dev:/app/package.json ./alexwbt/package.json
docker cp alexwbt-dev:/app/package-lock.json ./alexwbt/package-lock.json

docker cp alexwbt-api-dev:/app/node_modules ./alexwbt-api
docker cp alexwbt-api-dev:/app/package.json ./alexwbt-api/package.json
docker cp alexwbt-api-dev:/app/package-lock.json ./alexwbt-api/package-lock.json
