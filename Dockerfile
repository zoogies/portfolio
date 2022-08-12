FROM node:lts-alpine

WORKDIR /src/portfolio

COPY src/portfolio/package.json ./
RUN yarn install
RUN yarn build

COPY . ./

CMD ["serve","-s","src/portfolio/build","--listen 8580"]