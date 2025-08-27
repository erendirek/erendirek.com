FROM alpine:latest

WORKDIR /app

RUN "apk update & apk add npm & mkdir erendirekcom"

COPY . /app/erendirekcom

WORKDIR /app/erendirekcom

EXPOSE 3000

RUN "npm i && npm run build"

CMD ["npm", "run", "start"]