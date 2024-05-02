FROM node:16.14

WORKDIR /app

COPY package*.json .

RUN npm clean-install

COPY . .

CMD ["npm", "start"]