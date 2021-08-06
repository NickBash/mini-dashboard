const CategoryModel = require('../models/category.model')
const PositionModel = require('../models/position.model')

module.exports = new class PositionService {
	async getAll(id) {
		const category = await CategoryModel.find({user: id})
		return category
	}

	async getById(id) {
		const category = await CategoryModel.findById(id)
		return category
	}

	async create(req) {
		const category = await CategoryModel.create({
			name: req.body.name,
			imageSrc: req.file ? req.file.path : '',
			user: req.user.id
		})
		return category
	}

	async remove(id) {
		const category = await CategoryModel.findByIdAndRemove(id)
		await PositionModel.remove({category: id})
		return category
	}

	async update(req) {
		const updated = {
			name: req.body.name
		}

		if (req.file) {
			updated.imageSrc = req.file.path
		}

		const category = await CategoryModel.findOneAndUpdate(
			{_id: req.params.id},
			{$set: updated},
			{new: true}
		)
		return category
	}
}
