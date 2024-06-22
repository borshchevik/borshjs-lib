var borshjs = require('bitcoinjs-lib')

Object.assign(qtumjs.networks, require('./networks'))

qtumjs.utils = require('./utils')

module.exports = borshjs
