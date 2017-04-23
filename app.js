const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
//const ai = require("./AI/ai.js");
const $ = require('cheerio');
const decoded = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
const encoded = ["▲","╘","╓","╕","►","╜","╒","╖","▼","╛","╙","╚","╔","╗","◄","╝","║","╩","╠","╦","■","╣","═","╪","╫","╬","─","└","┌","┐","┘","│","┴","├","┬","┤"];

app.use(express.static("public"));

app.get('/public/', function (req, res) {
  var x,y;
  var coords;
  var alfanum;
  res.sendFile("index.html");
  
  x=Math.floor((Math.random()*17));
  y=Math.floor((Math.random()*17));
  
  coords=x*y;
  alfanum=$("#c" + coords).text();
  console.log("alfanum: " + alfanum);
});

app.listen(port, function () {
  console.log('Numeric app listening on port ' + port + '!');
});
