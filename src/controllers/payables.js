const logger = require('../helpers/logger')
const { getBalance } = require('../services/payables')

const getWaitingFunds = async (req, res) => {
  try {
    logger.info('Getting waiting_funds balance')

    const balance = await getBalance('waiting_funds')

    res.status(200).send(balance)
  } catch (err) {
    logger.error({
      message: 'Error getting waiting_funds balance',
      error: err
    })

    res.status(500).send('Erro getting waiting_funds balance')
  }
}

const getAvailable = async (req, res) => {
  try {
    logger.info('Getting waiting_funds balance')

    const balance = await getBalance('paid')

    res.status(200).send(balance)
  } catch (err) {
    logger.error({
      message: 'Error getting available balance',
      error: err
    })

    res.status(500).send('Erro getting available balance')
  }
}

module.exports = {
  getWaitingFunds,
  getAvailable
}
