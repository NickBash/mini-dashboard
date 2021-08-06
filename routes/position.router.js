const PositionController = require('../controllers/position.controller')
const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), PositionController.getByCategoryId)
router.post('/', passport.authenticate('jwt', {session: false}), PositionController.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), PositionController.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), PositionController.remove)

module.exports = router
