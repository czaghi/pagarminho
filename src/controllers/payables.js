const { Payable, sequelize } = require('../database/models')
const logger = require('../helpers/logger')

const getWaitingFunds = async (req, res) => {
  try {
    logger.info('Getting waiting_funds balance')

    const waiting_funds = await Payable.findAll({
      attributes: [sequelize.literal('COALESCE(SUM(amount - fee), 0) AS waiting_funds')],
      where: {
        status: 'waiting_funds'
      },
      raw: true
    })

    res.status(200).send(waiting_funds[0])
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

    const available = await Payable.findAll({
      attributes: [sequelize.literal('COALESCE(SUM(amount - fee), 0) AS available')],
      where: {
        status: 'paid'
      },
      raw: true
    })

    res.status(200).send(available[0])
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
