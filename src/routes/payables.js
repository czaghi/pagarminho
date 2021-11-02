const express = require('express')
const router = express.Router()
const payablesController = require('../controllers/payables')

router.get('/waiting_funds', payablesController.getWaitingFunds)
router.get('/available', payablesController.getAvailable)

module.exports = router
