const CategoryService = require('../services/category.service')

module.exports = new class CategoryController {
	async getAll(req, res) {
		try {
			const data = await CategoryService.getAll(req.user.id)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async getById(req, res) {
		try {
			const data = await CategoryService.getById(req.params.id)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async remove(req, res) {
		try {
			const data = await CategoryService.remove(req.params.id)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async create(req, res) {
		try {
			const data = await CategoryService.create(req)
			return res.status(201).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async update(req, res) {
		try {
			const data = await CategoryService.update(req)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}
}
