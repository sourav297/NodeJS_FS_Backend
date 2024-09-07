FROM node:20

WORKDIR /souravsingha/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3004

CMD ["node", "server"]