const lincor = require('lincor')
const { printError } = require('../utils')

module.exports = function() {
  lincor.init()
  lincor
    .getVersion()
    .then(version => console.log(version))
    .catch(printError)
}
