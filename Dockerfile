FROM node:8
WORKDIR /ricc-project
RUN npm i -g @angular/cli
RUN npm install -g nativescript
RUN npm i -g @nativescript/schematics