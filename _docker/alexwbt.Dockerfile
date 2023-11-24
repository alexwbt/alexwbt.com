# Builder
FROM node:18-alpine3.16 as BUILDER

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

RUN echo GENERATE_SOURCEMAP=false > .env

COPY tsconfig.json .
COPY public ./public

COPY src ./src
COPY craco.config.ts .

RUN npm run build


# Runtime
FROM node:18-alpine3.16

WORKDIR /app

RUN npm i -g http-server
COPY --from=builder /app/build /app/build

EXPOSE 3000

CMD ["http-server", "/app/build", "-p", "3000", "-d", "false"]
