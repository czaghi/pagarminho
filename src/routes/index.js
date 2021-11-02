const express = require('express')
const router = express.Router()

const payables = require('./payables')
const transactions = require('./transactions')

router.use('/payables', payables)
router.use('/transactions', transactions)

module.exports = router
