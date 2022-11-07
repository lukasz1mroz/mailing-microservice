FROM node:16

SHELL ["/bin/bash", "-c"]

WORKDIR /usr/src/app

COPY package.json ./

RUN npm -v

RUN npm install

COPY . .

EXPOSE 8080

CMD ["ts-node", "index.ts"]