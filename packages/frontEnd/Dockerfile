FROM node:18 AS bbards-frontend

WORKDIR /packages/frontEnd/

COPY package.json .
COPY package-lock.json .

RUN yarn install

COPY . .

CMD ["yarn", "start"]