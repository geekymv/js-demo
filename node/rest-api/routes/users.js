var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  userDao.getById(req, res, next);
});

// 分页获取用户列表
router.get('/:pageNo/:pageSize', function(req, res, next) {
  userDao.getAllByPage(req, res, next);
});

// 添加用户
router.post('/addUser', function(req, res, next) {
  userDao.add(req, res, next);

/*	var username = req.body.username;
	var password = req.body.password;

	console.log(req.body);

	console.log(username + ', ' + password);

	res.send('ok');
*/
});

module.exports = router;
