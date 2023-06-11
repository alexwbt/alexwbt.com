# Builder
FROM node:18-alpine3.16 as BUILDER

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY tsconfig.json .
COPY prisma prisma
COPY src src
RUN npm run build


# Runtime
FROM node:18-alpine3.16

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY package-lock.json .
COPY prisma prisma
RUN npm ci --omit=dev

COPY --from=builder /app/build .

CMD ["node", "main.js"]

EXPOSE 3000
