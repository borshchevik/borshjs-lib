var borshjs = require('bitcoinjs-lib')

Object.assign(borshjs.networks, require('./networks'))

qtumjs.utils = require('./utils')

module.exports = borshjs
