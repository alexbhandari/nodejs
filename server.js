var http = require('http');
var actions = require('./actions');

function start() {
	http.createServer(actions.onRequest).listen(3000);
	console.log("Server up and running!");
}

exports.start = start;
