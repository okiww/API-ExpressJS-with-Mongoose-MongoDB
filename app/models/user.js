var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Create Schema model user
var UserSchema = new Schema({
	name: String,
 	email: String,
 	password: String
});
// export the Schema model user
module.exports = mongoose.model('User', UserSchema);