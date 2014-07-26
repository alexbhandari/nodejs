var http = require('http');
var actions = require('./actions');

function start(route) {
	http.createServer(actions.onRequest(route)).listen(3000);
	console.log("Server up and running!");
}

exports.start = start;
