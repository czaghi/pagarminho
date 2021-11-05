const { Router } = require('express')
const transactionsController = require('../controllers/transactions')
const validate = require('../middlewares/validate')
const schema = require('../schemas/transactions')

const router = Router()

router.get('/', transactionsController.list)
router.post('/', validate(schema.create), transactionsController.create)

module.exports = router
