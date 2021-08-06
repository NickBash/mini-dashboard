const CategoryController = require('../controllers/category.controller')
const express = require('express')
const passport = require('passport')
const upload = require('../middlewares/upload.middleware')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), CategoryController.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), CategoryController.create)
router.post('/:id', passport.authenticate('jwt', {session: false}), CategoryController.getById)
router.delete('/:id', passport.authenticate('jwt', {session: false}), CategoryController.remove)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), CategoryController.update)

module.exports = router
