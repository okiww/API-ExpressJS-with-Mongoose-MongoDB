var User = require('./../models/user');

exports.create = function(req, res){
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.password = req.body.password;

	user.save(function(err, user){
		if(err)
 			res.send(err);
			res.json(user);
 	});
};

exports.getAll = function(req, res){
 	User.find(function(err, user) {
 		if (err)
 		res.send(err);
		res.json(user);
 	});
};

exports.findByName = function(req, res){
 	User.findOne({name: req.params.name}, function(err, user){
 	if (err)
 		res.send(err);
 		res.json(user);
 	});
};

exports.findAndUpdate = function(req, res) {
 	User.findOne({name: req.params.name}, function(err, user) {
	  if (!user)
	  	res.send('could not load Document');
	  else {
	    // do your updates here
	    user.modified = new User();
	    user.name = req.body.name;

	    user.save(function(err) {
	      if (err)
	 		res.send(err);
			res.json(user);
	    });
	  }
	});
};