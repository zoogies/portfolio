FROM node:lts-alpine

WORKDIR /usr/src/portfolio

COPY package.json ./
RUN yarn install
RUN yarn build

COPY . ./

CMD ["serve","-s","src/portfolio/build","--listen 8580"]