FROM node:14-alpine

RUN npm install -g http-server

RUN apk update && \
    apk upgrade --update-cache --available && \
    apk add xpdf \
    vips \
    vips-dev \
    python2 \
    git \
    make \
    g++

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]

