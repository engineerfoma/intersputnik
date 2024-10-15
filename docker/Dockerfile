FROM node:18.18.2

WORKDIR /frontend

COPY ./package.json /frontend/
COPY ./yarn.lock /frontend/

RUN yarn install

COPY . /frontend/

RUN yarn build

