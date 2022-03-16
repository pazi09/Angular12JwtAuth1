#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN yarn add ng
# RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:1.17.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/src/app /usr/share/nginx/html
EXPOSE 80
