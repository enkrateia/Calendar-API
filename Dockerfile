FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm install -g nodemon
EXPOSE 8000
CMD [ "npm", "start" ]
COPY . .
