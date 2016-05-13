var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('In the get....');
  res.send('Hello world');
});

app.listen(3000);
