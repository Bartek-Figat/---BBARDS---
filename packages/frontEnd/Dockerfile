FROM node:18 AS CLIENT

WORKDIR /app

COPY package.json . ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]

# FROM node:18 AS CLIENT
# WORKDIR /app
# COPY package* yarn.lock ./
# RUN yarn install
# COPY public ./public
# COPY src ./src
# RUN yarn run build

# FROM nginx:alpine
# COPY --from=CLIENT /app/build /usr/share/nginx/html