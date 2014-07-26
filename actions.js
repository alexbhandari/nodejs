var url = require('url');

function onRequest(route, request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " recieved.");

	route(pathname);

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Word");
	response.end();
}

exports.onRequest = onRequest;
