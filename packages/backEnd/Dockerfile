FROM node:18 AS API

WORKDIR /app

COPY package.json  ./


RUN yarn install

COPY . .

EXPOSE 8080

CMD yarn run build

