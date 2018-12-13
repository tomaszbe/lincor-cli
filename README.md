# Lincor - CLI

Command Line Interface to Lincor API.

## Requirements
You need *node.js* and a package manager (*npm* or *yarn*) to install and use the app.

## Installation
Install globally using your favourite package manager.

### Using Yarn
```sh
$ yarn global add https://github.com/tomaszbe/lincor-cli
```

### Using NPM
```sh
$ npm -g i https://github.com/tomaszbe/lincor-cli
```

## Usage
First, make sure your package manager's global bin directory is in PATH.

Run the commnad to list available options:
```sh
$ lincor --help
```

## Authorization
Most commands require the user to be authorized. In order to sign in, provide a *credentials.json* file with the followig contents:
```json
{
  "companyname": "<company name here>",
  "username": "<username goes here>",
  "password": "<password goes here>"
}
```
Specify credentials file path using *--credentials* cli option.


## Reference
App uses my [lincor](https://github.com/tomaszbe/lincor) package to connect with the back-end.

The back-end is provided by [Lincor's TruckOnline](https://system.truckonline.pl).