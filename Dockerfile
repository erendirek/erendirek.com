FROM node:current-alpine3.22

WORKDIR /app

RUN mkdir erendirek.com

COPY . /app/erendirek.com

WORKDIR /app/erendirek.com

EXPOSE 3000

RUN npm i && npm run build

CMD ["npm", "run", "start"]