'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: { 
		type: String,
		unique: true,
		lowercase: true
	}
})

module.exports = mongoose.model('User', UserSchema);