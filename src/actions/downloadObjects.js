const lincor = require('lincor')
const fs = require('fs')
const { signIn, printError } = require('../utils')

module.exports = function(cmd) {
  signIn(cmd.parent.credentials)
  lincor
    .getCars()
    .then(cars => {
      let json = JSON.stringify(cars)
      if (cmd.stdOut) {
        console.log(json)
      } else {
        fs.writeFileSync(cmd.file, json)
      }
    })
    .catch(printError)
}
