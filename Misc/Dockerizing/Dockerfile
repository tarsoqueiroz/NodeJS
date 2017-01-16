# Source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#         http://staxmanade.com/2016/07/run-multiple-docker-environments--qa--beta--prod--from-the-same-docker-compose-file-/
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
