const pino = require('pino')

module.exports = pino({
  formatters: {
    level: label => ({ level: label })
  },
  messageKey: 'message',
  nestedKey: 'data',
  timestamp: pino.stdTimeFunctions.isoTime
})
