FROM node:10
RUN mkdir /front
WORKDIR /front
ENV PATH /front/node_modules/.bin:$PATH
RUN npm install -g @angular/cli@9.0.1
ADD package.json package-lock.json /front/
RUN npm install
