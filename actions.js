var url = require('url');
var router = require('./router');

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " recieved.");

	router.route(pathname);

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Word");
	response.end();
}

exports.onRequest = onRequest;
