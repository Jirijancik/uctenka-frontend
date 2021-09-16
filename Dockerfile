FROM node:12

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["yarn", "start"]