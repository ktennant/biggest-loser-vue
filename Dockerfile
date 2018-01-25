# Build stage
FROM node:slim AS vue-build
WORKDIR /build
ENV NODE_ENV production
RUN npm i --quiet --global vue-cli
COPY package.json .
RUN yarn install && \
    yarn cache clean
COPY . . 
RUN npm build

# Runtime image, should run with express
FROM node:slim
WORKDIR /app
COPY ./express/ .
COPY --from=vue-build /build/dist ./public
RUN yarn install && yarn cache clean
EXPOSE 3000
CMD ["node", "server.js"]