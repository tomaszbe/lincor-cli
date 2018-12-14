#!/usr/bin/env node

const program = require('commander')
const actions = require('../src/actions')

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
  .action(actions.version)

program
  .command('download-objects')
  .alias('d')
  .description('Download all available objects.')
  .option('-f, --file [file name]', 'Output file name.', 'objects.json')
  .option(
    '-s, --std-out',
    'Print results to standard output instead of writing to file.'
  )
  .action(actions.downloadObjects)

program.parse(process.argv)
