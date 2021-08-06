const {Schema, model} = require('mongoose')

module.exports = model(
	'position',
	new Schema({
		name: {
			type: String,
			required: true,
			trim: true
		},
		cost: {
			type: Number,
			required: true
		},
		category: {
			ref: 'categories',
			type: Schema.Types.ObjectId
		},
		user: {
			ref: 'users',
			type: Schema.Types.ObjectId
		}
	})
)
