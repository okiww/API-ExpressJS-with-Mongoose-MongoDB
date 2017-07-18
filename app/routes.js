var express = require('express');
var user = require('./controller/userController');
module.exports = function(app, express) {
	var router = express();
	// api/v1/user
 	router.route('/user')
 	.get(user.getAll);
	// api/v1/user/create
 	router.route('/user/create')
 	.post(user.create);
	// api/v1/user/:name
 	router.route('/user/:name')
 	.get(user.findByName);

 	router.route('/user/edit/:name')
 	.put(user.findAndUpdate);
	return router;
};