# build stage
FROM node:current-alpine3.22 AS build
WORKDIR /app
RUN mkdir erendirek.com
COPY . /app/erendirek.com
WORKDIR /app/erendirek.com
EXPOSE 3000
RUN npm i && npm run build

# prod stage
FROM node:current-alpine3.22
WORKDIR /app
COPY --from=build /app/erendirek.com/.next/standalone/ /app/
COPY --from=build /app/erendirek.com/.next/static /app/.next/
CMD ["node", "server.js"]