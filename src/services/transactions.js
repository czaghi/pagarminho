const { Transaction } = require('../database/models')
const { createPayable } = require('../services/payables')

const createTransaction = async (transactionData, dbTransaction) => {
  const transaction = await Transaction.create(transactionData, { transaction: dbTransaction })
  await createPayable(transaction, dbTransaction)

  return transaction
}

const getTransactions = async () => {
  return await Transaction.findAll()
}

module.exports = {
  createTransaction,
  getTransactions
}
