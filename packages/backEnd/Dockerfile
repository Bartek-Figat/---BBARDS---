FROM node:18 AS API

WORKDIR /app

COPY package.json ./


RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD yarn run dev 
