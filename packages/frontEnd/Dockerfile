FROM node:18.15.0 as build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]