FROM node:alpine

ENV APP /usr/src/payments
WORKDIR $APP

COPY package.json package-lock.json ./
RUN npm ci --silent && npm cache clean --force

COPY . $APP
CMD ["npm", "run", "start"]
