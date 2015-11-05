'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const path = require('path');

app.on('ready', function () {
  let main = new BrowserWindow({
    width: 800,
    height: 600
  });

  main.loadUrl('file://' + path.join(__dirname, 'index.html'));
});
