FROM node:12.13.0

WORKDIR /sawtooth-supply-chain/ledger_sync

COPY ledger_sync/package.json .
RUN npm install
COPY . .
CMD [ "node", "index.js" ]
