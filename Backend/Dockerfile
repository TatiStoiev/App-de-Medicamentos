FROM node:16.14-alpine

WORKDIR /Backend

COPY package*.json ./

RUN npm clean-install

COPY . . 

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]