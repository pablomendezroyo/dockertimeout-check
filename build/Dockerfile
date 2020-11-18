FROM alpine

WORKDIR /usr/src/app
RUN apk add --update nodejs

COPY index.js ./

CMD [ "node", "index.js" ]

