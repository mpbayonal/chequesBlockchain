FROM node:10

WORKDIR /processor

COPY ./package*.json ./

RUN npm install --verbose

COPY . .

ENTRYPOINT ["node", "index.js"]
