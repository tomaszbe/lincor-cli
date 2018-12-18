const lincor = require('lincor')
const fs = require('fs')
const { signIn, printError } = require('../utils')
const path = require('path')

module.exports = function(cmd) {
  signIn(cmd.parent.credentials)
  lincor
    .getCars()
    .then(cars => {
      let json = JSON.stringify(cars)
      if (cmd.stdOut) {
        console.log(json)
      } else {
        let outFilePath = cmd.file
        if (!path.isAbsolute(outFilePath)) {
          outFilePath = path.join(process.cwd(), outFilePath)
        }
        fs.writeFileSync(outFilePath, json)
      }
    })
    .catch(printError)
}
