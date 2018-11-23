FROM node:8-alpine

ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app

COPY package.json .

RUN npm install --development

# COPY . .

CMD ["npm", "run", "dev"]