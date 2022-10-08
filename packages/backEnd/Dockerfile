FROM node:18 AS bbards-backend

WORKDIR /packages/backEnd/

COPY package.json .

RUN yarn install

VOLUME "/packages/backEnd/node_modules"

CMD ["yarn", "dev"]
