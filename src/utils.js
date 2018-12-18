const fs = require('fs')
const lincor = require('lincor')
const path = require('path')

const utils = {}

utils.signIn = function(credentialsFilePath) {
  try {
    if (!path.isAbsolute(credentialsFilePath)) {
      credentialsFilePath = path.join(process.cwd(), credentialsFilePath)
    }
    const credentialsFile = fs.readFileSync(credentialsFilePath)
    const credentials = JSON.parse(credentialsFile.toString())
    lincor.init(credentials)
  } catch (e) {
    lincor.init()
  }
}

utils.printError = error => console.error(error.message)

module.exports = utils
