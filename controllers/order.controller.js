const OrderService = require('../services/order.service')

module.exports = new class OrderController {
	async getAll(req, res) {
		try {
			const data = await OrderService.getAll(req)
			return res.status(200).json(data)
		} catch (e) {
			console.log(e)
		}
	}

	async create(req, res) {
		try {
			const data = await OrderService.create(req)
			return res.status(201).json(data)
		} catch (e) {
			console.log(e)
		}
	}
}
