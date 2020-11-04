'use strict'
require('dotenv').config()
const {TransactionProcessor} = require('sawtooth-sdk/processor')
const ChequesHandler = require('./handler')


const tp = new TransactionProcessor(process.env.VALIDATOR_URL || 'tcp://localhost:4004')


const handler = new ChequesHandler()
tp.addHandler(handler)

// TP startup.
tp.start()
