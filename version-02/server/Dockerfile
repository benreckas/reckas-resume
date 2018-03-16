#Create image based on the official Node 9 image from dockerhub
FROM node:9

# Create a directory where our app will be placed
RUN mkdir /home/node/server

# Change directory so that our commands run inside this new directory
WORKDIR /home/node/server

# Copy dependency definitions
COPY package.json /home/node/server

# Install dependnecies
RUN npm install

# Get all the code needed to run the app
COPY . /home/node/server

# Expose the port the app runs in
EXPOSE 5400

# Serve the app
CMD ["npm", "start"]
