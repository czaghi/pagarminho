const { Transaction, sequelize } = require('../database/models')
const logger = require('../helpers/logger')
const { createPayable } = require('../services/payables')

const getTransactions = async (req, res) => {
  try {
    logger.info('Getting transactions')

    const transactions = await Transaction.findAll()

    res.status(200).send(transactions)
  } catch (err) {
    logger.error({
      message: 'Error getting transaction',
      error: err
    })

    res.status(500).send('Erro getting transaction')
  }
}

const createTransaction = async (req, res) => {
  const dbTransaction = await sequelize.transaction()

  try {
    const transactionData = req.body

    transactionData.card_number = transactionData.card_number.slice(-4)

    logger.info({
      message: 'Creating transaction',
      payload: transactionData
    })

    const transaction = await Transaction.create(transactionData, { transaction: dbTransaction })

    await createPayable(transaction, dbTransaction)
    await dbTransaction.commit()

    res.status(201).send(transaction)
  } catch (err) {
    await dbTransaction.rollback()

    logger.error({
      message: 'Error creating transaction',
      error: err
    })

    res.status(500).send('Erro creating transaction')
  }
}

module.exports = {
  getTransactions,
  createTransaction
}
