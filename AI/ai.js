
module.exports = {
  foo: function () {
    console.log("foo");
  },
  bar: function () {
    console.log("bar");
  }
};

var mainFunction = function(){
	const $ = require('cheerio');
	const decoded = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
	const encoded = ["▲","╘","╓","╕","►","╜","╒","╖","▼","╛","╙","╚","╔","╗","◄","╝","║","╩","╠","╦","■","╣","═","╪","╫","╬","─","└","┌","┐","┘","│","┴","├","┬","┤"];
	var x,y;
	var coords;
	var alfanum;

	console.log("haha");

	x=Math.floor((Math.random()*17));
	y=Math.floor((Math.random()*17));

	coords=x*y;
	alfanum=$("#c" + coords).text();
	console.log("alfanum: " + alfanum);
};