# Angular Container

#Create image based on the official Node 8 image from dockerhub
FROM node:latest

# Create a directory in container and cd into it
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Expose the ports the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
