const {Schema, model} = require('mongoose')

module.exports = model(
	'orders',
	new Schema({
		date: {
			type: Date,
			default: Date.now
		},
		order: {
			type: Number,
			required: true
		},
		list: [
			{
				name: {
					type: String
				},
				quantity: {
					type: Number
				},
				cost: {
					type: Number
				}
			}
		],
		user: {
			ref: 'users',
			type: Schema.Types.ObjectId
		}
	})
)
