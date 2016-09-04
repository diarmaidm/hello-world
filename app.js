var express = require('express');
var app = express();

app.get('/', function (req, res) {

  // console.log(body) // Print the response.
  var request = require('request');
  var url = process.env.APIURL || 'http://localhost:8080';
  // request('http://localhost:8080', function (error, response, body) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body) // Print the response.
      res.send('This application - Yippee 2: <br><br>body in request callback:<br>' + body);
      // res.send('This application - Yippee 2: <br>body:' + body + '<br>response:' + JSON.stringify(response));
    }
  })

});

// app.listen(3000);

app.listen(process.env.PORT || 3000);
