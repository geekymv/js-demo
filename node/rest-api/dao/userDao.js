// 实现与MySQL交互

var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSQLMapping');

//var pool = mysql.createPool($util.extends({}, $conf.mysql))
var pool = mysql.createPool($conf.mysql);

// 封装返回结果
var resultJson = function(res, result, err) {
	if (typeof result === 'undefined') {
		console.log(err)
		res.json({
			code: '0',
			msg: '操作失败'
		});
	} else {
		res.json(result);
	}
};

module.exports = {
	// 添加用户
	add: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取请求参数
			// var params = req.query || req.params;
			var params = req.body;
		//	console.log(params);

			connection.query($sql.insert, [params.username, params.password], function(err, result) {
				if(result) {
					result = {
						code: 200,
						msg: '添加成功'
					};
				}

				resultJson(res, result);

				connection.release();
			});
		});
	},

	// 根据用户名和密码获取用户信息
	getByUserAndPwd(req, res, next) {
		
	},

	// 根据用户id获取用户信息
	getById: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			// 用户id
			var id = req.params.id;	// 将string转换成number +string
			connection.query($sql.queryById, +id, function(err, result) {
				resultJson(res, result[0]);

				connection.release();
			});
		});
	},

	// 用户列表分页
	getAllByPage: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			var pageNo = req.params.pageNo;
			var pageSize = req.params.pageSize;
			var pageIndex = (pageNo - 1) * pageSize;

			if(+pageSize > 20 || +pageNo < 1) {
				result = {
					code: 400,
					msg: '请求参数异常！'
				};
				resultJson(res, result);
				connection.release();
				return;
			}

			connection.query($sql.queryAll, [+pageIndex, +pageSize], function(err, result) {
				resultJson(res, result, err);
				connection.release();
			});
		});
	}


};


