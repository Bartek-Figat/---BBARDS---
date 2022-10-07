FROM node:18 AS bbards-backend

WORKDIR /packages/backEnd

COPY package.json .

RUN yarn install

COPY . .

RUN npm install

CMD ["yarn", "dev"]