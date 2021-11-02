const express = require('express')
const routes = require('./src/routes')
const logger = require('./src/helpers/logger')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  logger.info('Listening on port 3000...')
})
