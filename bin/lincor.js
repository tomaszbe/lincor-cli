#!/usr/bin/env node

const lincor = require('lincor')
const fs = require('fs')
const program = require('commander')

function signIn() {
  try {
    const credentialsFile = fs.readFileSync(program.credentials)
    const credentials = JSON.parse(credentialsFile.toString())
    lincor.init(credentials)
  } catch (e) {
    lincor.init()
  }
}

function printVersion() {
  lincor.init()
  lincor
    .getVersion()
    .then(version => console.log(version))
    .catch(error => console.error(error.message))
}

function downloadObjects(cmd) {
  signIn()
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
    .catch(error => console.error(error.message))
}

program.description('Command Line Interface to Lincor API.')

program.option(
  '-c, --credentials [path]',
  'Credentials file path.',
  'credentials.json'
)

program
  .command('version')
  .alias('v')
  .description('Get Lincor API version number.')
  .action(printVersion)

program
  .command('download-objects')
  .alias('d')
  .description('Download all available objects.')
  .option('-f, --file [file name]', 'Output file name.', 'objects.json')
  .option(
    '-s, --std-out',
    'Print results to standard output instead of writing to file.'
  )
  .action(downloadObjects)

program.parse(process.argv)
