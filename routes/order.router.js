const OrderController = require('../controllers/order.controller')
const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), OrderController.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), OrderController.create)

module.exports = router
