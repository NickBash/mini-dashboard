const {Schema, model} = require('mongoose')

module.exports = model(
	'category',
	new Schema({
		name: {
			type: String,
			required: true,
			trim: true
		},
		imageSrc: {
			type: String,
			default: ''
		},
		user: {
			ref: 'users',
			type: Schema.Types.ObjectId
		}
	})
)
