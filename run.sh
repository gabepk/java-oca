#!/bin/bash
scss scss/main.scss public/css/main.css
npm init --yes

npm install mysql -S
echo "-------"
echo "| 1/3 |"
echo "-------"

npm install express -S
echo "-------"
echo "| 2/3 |"
echo "-------"

npm install ejs -S
echo "-------"
echo "| 3/3 |"
echo "-------"
echo " "
echo "Listening on: http://localhost:8080/"

node server.js 
