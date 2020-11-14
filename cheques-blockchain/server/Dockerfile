FROM node:10


# Create app directory
WORKDIR /sawtooth-supply-chain/server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package.json .
RUN npm install
EXPOSE 3000/tcp
CMD ["node", "index.js"]
