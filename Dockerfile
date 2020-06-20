FROM node:lts AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM node:lts
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .

EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "."]
