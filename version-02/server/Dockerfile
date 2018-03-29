# Server Contianer

# Create image based on the official Node 9 image from dockerhub
FROM node:latest

# Create a directory in container and cd into it
RUN mkdir /home/node/server
WORKDIR /home/node/server

# Get all the code needed to run the app
COPY . /home/node/server

# Install nodemon dependencies
RUN npm install -g nodemon
RUN npm install

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]