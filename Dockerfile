FROM node:20-alpine3.19

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install
COPY . /app
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3004