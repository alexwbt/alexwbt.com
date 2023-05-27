
FROM node:18-alpine3.16

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY main.ts .

CMD ["npx", "ts-node", "--transpile-only", "main.ts"]

EXPOSE 3000
