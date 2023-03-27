# pull the Node.js Docker image
FROM node:lts-alpine

# update the package index
RUN apk update
RUN apk add --no-cache tzdata

# set timezone data
ENV TZ=Asia/Kuala_Lumpur

# create app directory
WORKDIR /usr/src/app

# bundle app source
COPY . .

# run npm ci
RUN npm ci

# create optimized build for production
RUN npm run build

# app run on port 3000
EXPOSE 3000

# run the app
CMD ["npm", "start"]
