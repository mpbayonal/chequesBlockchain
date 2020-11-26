FROM node:10

WORKDIR /sawtooth-supply-chain/ledger_sync

COPY ./package*.json ./

RUN npm install --verbose

COPY . .

CMD [ "node", "index.js" ]
