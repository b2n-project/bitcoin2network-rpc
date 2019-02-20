// Copyright (c) 2018, Brandon Lehmann, The TurtleCoin Developers
// Copyright (c) 2019, CodingRonin, The b2n-project Developers
//
// Please see the included LICENSE file for more information.

'use strict'

module.exports.bitcoin2networkd = require('./lib/bitcoin2networkd-rpc.js')
module.exports.B2NService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/bitcoin2networkd-rpc.js')
