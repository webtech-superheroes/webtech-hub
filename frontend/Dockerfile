FROM node:12.14.1-buster-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.16.1-alpine

COPY --from=0 /app/build /app/
