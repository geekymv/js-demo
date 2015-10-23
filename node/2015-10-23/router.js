
function router(pathname, handlers, response) {

	if(typeof handlers[pathname] === 'function') {
		handlers[pathname](response);
	}else {
		console.log('no request handler found ' + pathname)
		
		response.writeHead(404, {'Content-type':'text/plain'});
		response.write('404 Not found');
		response.end();
	}
}

exports.router = router;