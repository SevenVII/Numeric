var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

app.use(express.static("core"));

app.get('/core/', function (req, res) {
  res.sendFile("index.html");
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
