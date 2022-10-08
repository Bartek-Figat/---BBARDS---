FROM node:18 AS bbards-frontend

WORKDIR /packages/frontEnd/

COPY package.json .
COPY package-lock.json .

RUN yarn install

VOLUME "/packages/frontEnd/node_modules"

CMD ["yarn", "start"]