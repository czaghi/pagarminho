const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const validate = require('../middlewares/validate')
const schema = require('../schemas/transactions')

router.get('/', transactionsController.getTransactions)
router.post('/', validate(schema.create), transactionsController.createTransaction)

module.exports = router
