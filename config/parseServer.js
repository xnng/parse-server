const parseConfig = require('./parseConfig')

module.exports = {
  databaseURI: parseConfig.databaseURI,
  cloud: './cloud/main.js',
  appId: parseConfig.appId,
  masterKey: parseConfig.masterKey,
  serverURL: parseConfig.serverURL
}
