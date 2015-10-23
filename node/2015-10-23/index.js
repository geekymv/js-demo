var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handlers = {
	'/': handler.index,
	'/test': handler.test,
	'/publish': handler.publish
};
/*
handlers['/'] = handler.index;
handlers['/publish'] = handler.publish;
handlers['/test'] = handler.test;
*/
server.start(router, handlers);