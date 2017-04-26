const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const AIFunctions = require("./AI/ai.js");

app.use(express.static("public"));

console.log("1");
app.get('/public/', function (req, res) {
	res.sendFile("index.html");
});

app.listen(port, function () {
	console.log('Numeric app listening on port ' + port + '!');
});

app.post("/check", function (req, res) {
	res.send("<p>some html</p>");
});

