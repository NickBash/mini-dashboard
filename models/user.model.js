const {Schema, model} = require('mongoose')

module.exports = model(
	'users',
	new Schema({
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true
		},
	})
)
