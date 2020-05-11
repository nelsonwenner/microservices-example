#!/bin/bash

cd /backend/src/

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

./wait-for-it.sh www.google.com:81 -- npm install && npm run migrate && npm run start