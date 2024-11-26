FROM node:alpine3.18 as build

# Declare build time environment variables
# ARG REACT_APP_NODE_ENV
# ARG REACT_APP_SERVER_BASE_URL

# Set default values for environment variables
# ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
# ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]

# Serve with Nginx
# FROM nginx
# WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# COPY --from=dist /app/dist .
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;" ]