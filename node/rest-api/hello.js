var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function(req, res) {
	var connection = mysql.createConnection({
		host	: 'localhost',
		database: 'mysql',
		user	: 'root',
		password: 'root',
		port	: '3306'
	});

	connection.connect();

	connection.query('select user, host from user', 
	    function selectDb(err, results, fields) {
		if(err) {
		    throw err;
		}
		
		if(results) {
		    var users = [];
		    for(var i = 0; i < results.length; i++) {
		        var user = results[i];
				users.push({'name': user.user, 'host': user.host});
		    }
		   
		    res.json(users);
		}
	});
	
})

app.listen(8000, function() {
	console.log('8000');
})
