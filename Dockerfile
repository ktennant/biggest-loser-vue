FROM node:9 AS vue-build
WORKDIR build
ENV NODE_ENV production
COPY package.json .
RUN npm i
COPY . . 
RUN node build/build.js

FROM node:slim
WORKDIR app
COPY ./express/ .
COPY --from=vue-build /build/dist ./public
RUN yarn install && yarn cache clean
EXPOSE 3000
CMD ["npm", "start"]