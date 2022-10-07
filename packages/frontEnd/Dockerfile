FROM node:18 AS bbards-frontend

WORKDIR /packages/frontEnd

COPY package.json .
COPY package-lock.json .

RUN yarn install

COPY . .

RUN npm install

CMD ["yarn", "start"]