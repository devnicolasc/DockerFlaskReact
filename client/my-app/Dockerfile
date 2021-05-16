FROM node:14-slim

WORKDIR /user/src/app

COPY ./client/my-app/package.json ./

COPY ./client/my-app/yarn.lock ./

RUN npm install

COPY ./client/my-app .

EXPOSE 3000

CMD ["npm", "start"]