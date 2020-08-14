# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:current-alpine AS BUILD_IMAGE
# couchbase sdk requirements
RUN apk update && apk add yarn curl bash python g++ make && rm -rf /var/cache/apk/*

# install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
# Set the working directory to ./app
WORKDIR ./app

# Install app dependencies
COPY package.json yarn.lock ./
# Install any needed packages
RUN yarn install
COPY . ./
#create build
RUN yarn run build
# remove development dependencies
RUN npm prune --production
RUN /usr/local/bin/node-prune
# copy from build image
FROM node:current-alpine

WORKDIR /app

RUN yarn global add serve
COPY --from=BUILD_IMAGE /app/build ./
CMD ["serve", "-l","3000"]