const UserService = require('../services/user.service.js')

module.exports = new class AuthController {
	async reg(req, res) {
		try {
			const {email, password} = req.body
			const userData = await UserService.reg(email, password)
			return res.json(userData)
		} catch (e) {
			console.log(e)
		}
	}

	async login(req, res) {
		try {
			const {email, password} = req.body
			const userData = await UserService.login(email, password)
			return res.json(userData)
		} catch (e) {
			console.log(e)
		}
	}
}
