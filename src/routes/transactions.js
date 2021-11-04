const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')
const validate = require('../middlewares/validate')
const schema = require('../schemas/transactions')

router.get('/', transactionsController.list)
router.post('/', validate(schema.create), transactionsController.create)

module.exports = router
