var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(router, handlers) {
	var server = http.createServer(function(request, response) {
		var path = url.parse(request.url).pathname;

		router.router(path, handlers, response);
		
		/*
		var query = url.parse(req.url).query;
		console.log('query = ' + query);

		var name = querystring.parse(query)["name"];
		console.log('name = ' + name);
		*/
	});

	server.listen(8080);

	console.log('127.0.0.1:8080')
}

exports.start = start;
