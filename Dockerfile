# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:10.16.0-alpine

# Set the working directory to ./app
WORKDIR ./app/temp

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
# Install any needed packages
RUN yarn global add serve
RUN yarn install
COPY . ./
#create build
RUN yarn run build
RUN mv ./build/* ../
# Bundle app source

WORKDIR /app
RUN rm -rf /app/temp
# Run app.js when the container launches
CMD ["serve", "-l","3000"]