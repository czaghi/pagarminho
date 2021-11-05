const { Router } = require('express')
const payables = require('./payables')
const transactions = require('./transactions')

const router = Router()

router.use('/payables', payables)
router.use('/transactions', transactions)

module.exports = router
