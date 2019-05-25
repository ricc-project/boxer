FROM node:8

RUN apt-get update && \
    apt-get install -y openjdk-8-jdk wget unzip usbutils adb && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /android_sdk

WORKDIR /ricc-project
RUN npm i -g @angular/cli
RUN npm install -g nativescript
RUN npm i -g @nativescript/schematics
