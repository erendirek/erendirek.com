FROM alpine:latest

RUN "apk add npm"

WORKDIR /app

COPY ../erendirek.com /app/

WORKDIR /app/erendirek.com

EXPOSE 3000

RUN "npm i && npm run build"

CMD ["npm", "run", "start"]