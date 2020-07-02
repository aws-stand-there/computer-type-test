FROM node:lts-alpine as worker

RUN mkdir /computer-type-test
WORKDIR /computer-type-test
COPY . .
RUN yarn && yarn run build

FROM nginx:stable-alpine

COPY _/default.conf /etc/nginx/conf.d/
COPY --from=worker /computer-type-test/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
