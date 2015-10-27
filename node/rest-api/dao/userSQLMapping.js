var user = {
	insert: 'insert into user(username, password) values(?, ?)',
	update: 'update user set username = ?, password = ? where id = ?',
//	delete: 'delete from user where id = ?',
	queryById: 'select * from user where id = ?',
	queryByUserAndPwd: 'select * from user where username = ? and password = ?',
	queryAll: 'select * from user limit ?, ?'
}

module.exports = user;