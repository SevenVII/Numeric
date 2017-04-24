const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const AIFunctions = require("./AI/ai.js");

app.use(express.static("public"));
console.log("1");
app.get('/public/', function (req, res) {
	console.log("2");
	res.sendFile("index.html");
	console.log("3");
});
console.log("4");

app.listen(port, function () {
	console.log('Numeric app listening on port ' + port + '!');
});
console.log("5");

AIFunctions.mainFunction();