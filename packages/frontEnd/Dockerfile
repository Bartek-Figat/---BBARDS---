# Dockerfile
# Stage 1 - the build process
FROM node:18.15.0 as build
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3001
CMD yarn start

# # Stage 2 - the production environment
# FROM nginx:stable-alpine as prod-stage
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]