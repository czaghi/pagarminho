const express = require('express')
const routes = require('./routes')
const logger = require('./helpers/logger')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  logger.info('Listening on port 3000...')
})
