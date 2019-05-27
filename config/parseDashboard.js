const parseConfig = require('./parseConfig')

module.exports = {
  apps: [
    {
      serverURL: parseConfig.serverURL,
      appId: parseConfig.appId,
      masterKey: parseConfig.masterKey,
      appName: parseConfig.appName
    }
  ],
  users: [
    {
      user: 'admin',
      pass: 'admin',
      apps: [{ appId: parseConfig.appId }]
    }
  ]
}
