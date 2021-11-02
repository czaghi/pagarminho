const {
  pluck,
  prop,
  pipe
} = require('ramda')
const logger = require('../helpers/logger')

const getErrList = pipe(
  prop('details'),
  pluck('context'),
  pluck('key')
)

module.exports = schema => (req, res, next) => {
  const { error } = schema.validate(req, {
    abortEarly: false,
    allowUnknown: true
  })

  if (error) {
    const errList = getErrList(error)

    logger.warn({
      message: 'Invalid parameters',
      invalidParameters: errList
    })

    res.status(422).send({
      type: error.name,
      message: `Invalid parameters: ${JSON.stringify(errList)}`
    })
  } else (
    next()
  )
}
