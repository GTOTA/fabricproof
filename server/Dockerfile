FROM node:8-alpine

LABEL com.chegvra.version="0.0.1"

# Create app directory
WORKDIR /usr/src/app
COPY . .

RUN apk add --update python make alpine-sdk libc6-compat
RUN npm install && npm cache rm --force
   # remove node-gyp dependancies (for alpine only)
   # libc6-compat is essential for grpc, so don't remove it
RUN apk del --purge python make alpine-sdk

EXPOSE 4000

CMD [ "npm", "start" ]
