const PositionModel = require('../models/position.model')

module.exports = new class PositionService {
	async getByCategoryId(categoryId, user) {
		const position = await PositionModel.find({
			category: categoryId,
			user: user.id
		})
		return position
	}

	async create(user, body) {
		const position = await PositionModel.create({
			name: body.name,
			cost: body.cost,
			category: body.category,
			user: user.id
		})
		return position
	}

	async remove(id) {
		const position = await PositionModel.create({_id: id})
		return position
	}

	async update(id, body) {
		const position = await PositionModel.findByIdAndUpdate(
			{_id: id},
			{$set: body},
			{new: true}
		)
		return position
	}


}
