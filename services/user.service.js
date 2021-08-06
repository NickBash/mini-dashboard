const UserModel = require('../models/user.model')
const ApiError = require ('../exceptions/api-error.exception')
const UserDto = require("../dtos/user.dto");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = new class UserService {
	async reg(email, password) {
		const candidate = await UserModel.findOne({email})

		if (candidate) {
			throw ApiError.BadRequest('Пользователь уже существует')
		}

		const hashPass = await bcrypt.hash(password, 3)

		const user = await UserModel.create({email, password: hashPass})
		const userDto = new UserDto(user)

		return {user: userDto}
	}

	async login(email, password) {
		const user = await UserModel.findOne({email})
		if (!user) {
			throw ApiError.BadRequest('Пользователь не найден')
		}

		const isPassEquals = await bcrypt.compare(password, user.password)

		if (!isPassEquals) {
			throw ApiError.BadRequest('Не верный пароль')
		}

		const userDto = new UserDto(user)
		const token = jwt.sign({...userDto}, config.JWT_ACCESS_SECRET, {expiresIn: '30m'})

		return {user: userDto, token}
	}
}
