FROM alpine:3.19.1
WORKDIR /usr/src/api
RUN apk update
RUN apk upgrade

RUN apk add npm

COPY . /usr/src/api

RUN npm cache clean --force
RUN npm install --verbose
RUN echo "Running apllication uelio"
CMD npm run dev