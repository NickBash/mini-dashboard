const OrderModel = require('../models/order.model')

module.exports = new class OrderService {
	async getAll(req) {
		const query = {
			user: req.user.id
		}

		if (req.query.start) {
			query.date = {
				$gte: req.query.start
			}
		}

		if (req.query.end) {
			if (!query.date) {
				query.date = {}
			}

			query.date['$lte'] = req.user.end
		}

		if (req.query.order) {
			query.order = +req.query.order
		}

		const orders = await OrderModel.find(query).sort({date: -1}).skip(+req.query.offset).limit(+req.query.limit)
		return orders
	}

	async create(req) {
		const lastOrder = await OrderModel.findOne({user: req.user.id}).sort({date: -1})
		const maxOrder = lastOrder ? lastOrder.order : 0

		const order = await OrderModel.create({
			list: req.body.list,
			user: req.user.id,
			order: maxOrder + 1,
		})
		return order
	}
}
