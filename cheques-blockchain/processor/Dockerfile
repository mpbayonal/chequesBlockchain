FROM node:10

WORKDIR /processor

COPY package.json .

RUN npm install

ENTRYPOINT ["node", "index.js"]
