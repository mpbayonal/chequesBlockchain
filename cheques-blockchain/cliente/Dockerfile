FROM node:10 as build-step

RUN mkdir /cliente
WORKDIR /cliente
RUN npm install -g @angular/cli

COPY . .
