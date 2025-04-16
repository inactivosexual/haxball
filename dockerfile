FROM node:18
WORKDIR /app
COPY . .
RUN npm install puppeteer
CMD ["node", "server.js"]