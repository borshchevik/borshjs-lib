var borshjs = require('bitcoinjs-lib')

Object.assign(borshjs.networks, require('./networks'))

borshjs.utils = require('./utils')

module.exports = borshjs
