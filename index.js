#! /usr/bin/env node

const chokidar = require('chokidar');
const fs = require('fs');
const ncp = require('ncp').ncp;

// Read config JSON file
const rawdata = fs.readFileSync('poc.config.json');
const config = JSON.parse(rawdata);

// Watch source folder and copy to destination folder
chokidar.watch(config.source).on('all', (event, path) => {
  console.log(event, path);
 
  ncp.limit = 16;

  ncp(config.source, config.destination, function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('done!');
  });
});