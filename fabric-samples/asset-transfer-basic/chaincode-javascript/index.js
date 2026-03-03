/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const ehrChaincode = require('./lib/ehrChaincode');

module.exports.ehrChaincode = ehrChaincode;
module.exports.contracts = [ehrChaincode];
