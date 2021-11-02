const Joi = require('joi')

const create = Joi.object({
  body: Joi.object({
    amount: Joi.number().integer().positive().required(),
    description: Joi.string().required(),
    payment_method: Joi.string().valid('credit_card', 'debit_card').required(),
    card_number: Joi.string().pattern(new RegExp(/^(\d{4}\s?){3}\d{4}$/)).required(),
    card_holder_name: Joi.string().required(),
    card_verification_value: Joi.string().pattern(new RegExp(/^\d{3}$/)).required(),
    card_expiration_date: Joi.string().pattern(new RegExp(/^\d{4}-\d{2}$/)).required()
  })
})

module.exports = { create }
