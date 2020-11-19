FROM node:10

WORKDIR /sawtooth-supply-chain/server

COPY ./package*.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
