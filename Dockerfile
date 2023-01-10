FROM node:lts-alpine

WORKDIR /

COPY . ./
RUN cd src && yarn install
RUN cd src && yarn build

RUN npm install --global serve

CMD ["serve","-s","src/build"]