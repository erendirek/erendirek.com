FROM alpine:latest

WORKDIR /app

RUN "apk add npm & mkdir erendirek.com"

COPY . /app/

WORKDIR /app/erendirek.com

EXPOSE 3000

RUN "npm i && npm run build"

CMD ["npm", "run", "start"]