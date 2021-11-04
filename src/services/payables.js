const { Payable, sequelize } = require('../database/models')
const moment = require('moment')
const logger = require('../helpers/logger')

const DEBIT_FEE = 0.03
const CREDIT_FEE = 0.05

function buildPayable(transaction) {
  const payable = {}

  payable.transaction_id = transaction.id
  payable.amount = transaction.amount

  if (transaction.payment_method === 'credit_card') {
    payable.status = 'waiting_funds'
    payable.fee = Math.round(transaction.amount * CREDIT_FEE)
    payable.payment_date = moment().startOf('day').add(30, 'days')
  } else {
    payable.status = 'paid'
    payable.fee = transaction.amount * DEBIT_FEE
    payable.payment_date = moment().startOf('day')
  }

  return payable
}

const createPayable = async (transaction, dbTransaction) => {
  logger.info({
    message: 'Creating payable',
    transaction
  })

  const payableData = buildPayable(transaction)

  return await Payable.create(payableData, { transaction: dbTransaction })
}

const getBalance = async (status) => {
  const balance = await Payable.findAll({
    attributes: [sequelize.literal('COALESCE(SUM(amount - fee), 0) AS balance')],
    where: {
      status: status
    },
    raw: true
  })

  return balance[0]
}

module.exports = {
  createPayable,
  getBalance
}
