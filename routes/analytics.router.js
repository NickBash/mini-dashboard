const AnalyticsController = require('../controllers/analytics.controller')
const express = require('express')
const router = express.Router()

router.get('/overview', AnalyticsController.overview)
router.get('/analytics', AnalyticsController.analytics)

module.exports = router
