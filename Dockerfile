FROM node:slim
WORKDIR /app
COPY package.json .
RUN yarn install && \
    yarn cache clean && \
    npm i --quiet --global vue-cli
EXPOSE 8080