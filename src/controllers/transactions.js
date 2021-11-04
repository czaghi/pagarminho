const logger = require('../helpers/logger')
const { sequelize } = require('../database/models')
const { createTransaction, getTransactions } = require('../services/transactions')

const list = async (req, res) => {
  try {
    logger.info('Getting transactions')

    const transactions = await getTransactions()

    res.status(200).send(transactions)
  } catch (err) {
    logger.error({
      message: 'Error getting transaction',
      error: err
    })

    res.status(500).send('Error getting transaction')
  }
}

const create = async (req, res) => {
  try {
    const transactionData = req.body

    transactionData.card_number = transactionData.card_number.slice(-4)

    logger.info({
      message: 'Creating transaction',
      payload: transactionData
    })

    const transaction = await sequelize.transaction(async (dbTransaction) => {
      return await createTransaction(transactionData, dbTransaction)
    })

    res.status(201).send(transaction)
  } catch (err) {
    logger.error({
      message: 'Error creating transaction',
      error: err
    })

    res.status(500).send('Error creating transaction')
  }
}

module.exports = {
  list,
  create
}
