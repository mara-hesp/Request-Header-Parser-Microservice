// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/:input', function (req, res) {
  let response = {}
  response['ipaddress'] = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  response['language'] = req.headers['accept-language']
  response['software'] = req.headers['user-agent']
  res.json(response);
});

// listen for requests :)
let PORT = process.env.PORT || 3000

app.listen(PORT, (req, res) => {
  console.log(`Your app is listening on port ${PORT}`)
})
