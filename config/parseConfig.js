const env = process.env.NODE_ENV

let parseConfig
if (env === 'development') {
  parseConfig = {
    serverURL: 'http://localhost:1338/parse',
    appId: 'MY_ID',
    masterKey: 'MY_KEY',
    appName: 'MyApp',
    databaseURI: 'mongodb://localhost:27017/dev'
  }
} else {
  parseConfig = {
    serverURL: 'http://localhost:1338/parse',
    appId: 'MY_ID',
    masterKey: 'MY_KEY',
    appName: 'MyApp',
    databaseURI: 'mongodb://localhost:27017/dev'
  }
}

module.exports = parseConfig
