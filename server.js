const express = require('express')
const ParseServer = require('parse-server').ParseServer
const ParseDashboard = require('parse-dashboard')

const parseServerConfig = require('./config/parseServer')
const ParseDashboardConfig = require('./config/parseDashboard')
const parseServer = new ParseServer(parseServerConfig)
const parseDashboard = new ParseDashboard(ParseDashboardConfig, {
  allowInsecureHTTP: true
})

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors({ credentials: true, origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/parse', parseServer)
app.use('/apps', parseDashboard)

const PORT = 1338
app.listen(PORT, () => {
  console.log(
    `parse-server: http://localhost:${PORT}/parse\nparse-dashboard: http://localhost:${PORT}/apps`
  )
})
