var https = require('https');
var express = require('express');
var app = new express();

module.exports = {
	printName: function(name) {
		return name.last + "," + name.first;
	},
	getWikiPage: function(name, callback) {
		var url = `https://en.wikipedia.org/wiki/${name.first}_${name.last}`;
		console.log(url.toString());
		https.get(url, function(res) {
			res.setEncoding('UTF-8');
			var body = "";
			res.on("data", function(chunk) {
				//console.log(chunk);
				body += chunk;
			})
			res.on("end", function() {
				callback(body);
			})

		})
	}


}