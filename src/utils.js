const fs = require('fs')
const lincor = require('lincor')

const utils = {}

utils.signIn = function () {
  try {
    const credentialsFile = fs.readFileSync(program.credentials)
    const credentials = JSON.parse(credentialsFile.toString())
    lincor.init(credentials)
  } catch (e) {
    lincor.init()
  }
}

utils.printError = error => console.error(error.message)

module.exports = utils