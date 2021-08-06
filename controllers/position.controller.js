const PositionService = require('../services/position.service')

module.exports = new class CategoryController {
	async getByCategoryId(req, res) {
		try {
			const data = await PositionService.getByCategoryId(req.params.categoryId, req.user.id)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async remove(req, res) {
		try {
			const data = await PositionService.remove(req.params.id)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async create(req, res) {
		try {
			const data = await PositionService.create(req.user, req.body)
			return res.status(201).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async update(req, res) {
		try {
			const data = await PositionService.update(req.params.id, req.body)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}
}
