'use strict'
const {TransactionProcessor} = require('sawtooth-sdk/processor')
const ChequesHandler = require('./handler')


const tp = new TransactionProcessor(process.env.VALIDATOR_URL )


const handler = new ChequesHandler()
tp.addHandler(handler)

// TP startup.
tp.start()
