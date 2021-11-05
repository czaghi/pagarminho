const { Router } = require('express')
const payablesController = require('../controllers/payables')

const router = Router()

router.get('/waiting_funds', payablesController.getWaitingFunds)
router.get('/available', payablesController.getAvailable)

module.exports = router
