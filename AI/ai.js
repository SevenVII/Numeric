
module.exports = {
	mainFunction: function () {
		const express = require('express');
		const app = express();
		const decoded = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
		const encoded = ["▲","╘","╓","╕","►","╜","╒","╖","▼","╛","╙","╚","╔","╗","◄","╝","║","╩","╠","╦","■","╣","═","╪","╫","╬","─","└","┌","┐","┘","│","┴","├","┬","┤"];
		var x,y;
		var coords;
		var alfanum;
		
		x=Math.floor((Math.random()*17));
		y=Math.floor((Math.random()*17));

		console.log($().html());

		coords=x*y;
		alfanum=$("#c" + coords).text();
		console.log("alfanum: " + alfanum);
	}
};