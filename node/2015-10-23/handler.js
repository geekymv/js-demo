var exec = require('child_process').exec;
var db = require('./db');

function publish(response) {
	/*
	response.writeHead(200, {'Content-type':'application/json'});
	response.write('{"name": "zhangsan", "age": 22}');
	response.end();
	*/



	/*
	// 模拟睡眠操作
	function sleep(milliseconds) {
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliseconds);
	}

	var content = 'empty';
	*/

	// 耗时操作
	exec(db.test(), function(error, stdout, stderr) {
		response.writeHead(200, {'Content-type':'text/plain'});
		console.log(stdout);
		response.write('hello world');
		response.end();
	});

	/*
	sleep(10 * 1000);

 	return 'publish...';
 	*/
}

function test(response) {
	var html = '<html><body><h1>hello nodejs</h1></body></html>';
	response.writeHead(200, {'Content-type':'text/html'});
	response.write(html);
	response.end();
}

// add your code


exports.publish = publish;
exports.test = test;