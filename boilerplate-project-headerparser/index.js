const express = require('express');
const cors = require('cors');   // fixed
const app = express();
require('dotenv').config()

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {

  const ipaddress = req.ip;
  const language = req.get("Accept-Language");
  const software = req.get("User-Agent");

  res.json({
    ipaddress,
    language,
    software
  });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
