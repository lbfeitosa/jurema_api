FROM node:12.13-alpine As development
WORKDIR /home/node/jurema_api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]