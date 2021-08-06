const AuthController = require('../controllers/auth.controller')
const express = require('express')
const router = express.Router()

router.post('/login', AuthController.login)
router.post('/reg', AuthController.reg)

module.exports = router
