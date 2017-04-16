var express = require('express');
var app = express();

const pathToIndex="C:/Users/Seven/Desktop/Numeric/";

app.use(express.static("core"));

app.get('/core/', function (req, res) {
  res.sendFile(pathToIndex);
  console.log("hihi: " + app.path());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
