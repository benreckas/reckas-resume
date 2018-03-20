Server

#Create image based on the official Node 9 image from dockerhub
FROM node:8

# Create a directory where our app will be placed
RUN mkdir /home/node/server

# Change directory so that our commands run inside this new directory
WORKDIR /home/node/server

# Copy dependency definitions
COPY package.json /home/node/server

# Install dependnecies
RUN npm install -g nodemon

# Install dependnecies
RUN npm install

# Get all the code needed to run the app
COPY . /home/node/server

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]






Public

#Create image based on the official Node 8 image from dockerhub
FROM node:8

# Create a directory where our app will be place
RUN mkdir -p usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json  /usr/src/app

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the ports the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
