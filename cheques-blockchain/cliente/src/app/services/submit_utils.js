/**
 * Copyright 2017 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ----------------------------------------------------------------------------
 */
'use strict'


import {postBinary} from "./api";

const { post } = require('./api')
const _ = require('lodash')
import * as shajs from 'sha.js';
import * as sjcl from "sjcl";
const secp256k1 = require('sawtooth-sdk/signing/secp256k1')
const {
  Transaction,
  TransactionHeader,
  TransactionList
} = require('sawtooth-sdk/protobuf')
const protos = require('../blockchain/protos')



const FAMILY_NAME = 'supply_chain'
const FAMILY_VERSION = '1.1'
const NAMESPACE = '3400de'

const SERVER = process.env.SERVER || 'http://localhost:80209'
const RETRY_WAIT = process.env.RETRY_WAIT || 5000

export const awaitServerInfo = () => {
  return get(`${SERVER}/info`)
    .catch(() => {
      console.warn(
        `Server unavailable, retrying in ${RETRY_WAIT / 1000} seconds...`)
      return new Promise(resolve => setTimeout(resolve, RETRY_WAIT))
        .then(awaitServerInfo)
    })
}

export const awaitServerPubkey = () => {
  return awaitServerInfo().then(info => JSON.parse(info).pubkey)
}

export const encodeHeader = (signerPublicKey, batcherPublicKey, payload) => {
  let t = shajs('sha512').update(payload).digest('hex')
  return TransactionHeader.encode({
    signerPublicKey,
    batcherPublicKey,
    familyName: FAMILY_NAME,
    familyVersion: FAMILY_VERSION,
    inputs: [NAMESPACE],
    outputs: [NAMESPACE],
    nonce: (Math.random() * 10 ** 18).toString(36),
    payloadSha512: t
  }).finish()
}

export const getTxnCreator = (privateKeyHex = null, batcherPublicKeyHex = null) => {
  const context = new secp256k1.Secp256k1Context()
  const privateKey = privateKeyHex === null
    ? context.newRandomPrivateKey()
    : secp256k1.Secp256k1PrivateKey.fromHex(privateKeyHex)

  const signerPublicKey = context.getPublicKey(privateKey).asHex()
  const batcherPublicKey = batcherPublicKeyHex === null
    ? signerPublicKey
    : batcherPublicKeyHex

  return payload => {
    const header = encodeHeader(signerPublicKey, batcherPublicKey, payload)
    const headerSignature = context.sign(header, privateKey)
    return Transaction.create({ header, headerSignature, payload })
  }
}

export const submitTxns = transactions => {
  return postBinary(`${SERVER}/transactions?wait`, TransactionList.encode({ transactions }).finish())
}

export const encodeTimestampedPayload = message => {
  return protos.SCPayload.encode(_.assign({
    timestamp: Math.floor(Date.now() / 1000)
  }, message)).finish()
}


let updateGroups = []
let createTxn = null

// How much random quantities can vary by
export const VARIANCE_FACTOR = 0.75

let agents2 =  [
  {
    "username": "101945875786",
    "password": "ahab",
    "publicKey": "03ba003ea48e3599f73939b7908ca361cf539cc0baa7b0a049c590bcc46e2ef55a",
    "name": "Laura Martinez Garcia",
    "email": "ahab@pequod.co",
    "privateKey": "063f9ca21d4ef4955f3e120374f7c22272f42106c466a91d01779efba22c2cb6",
    "encryptedKey": "{\"iv\":\"sKGty1gSvZGmCwzkGy0vvg==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"lYT7rTJpTV0=\",\"ct\":\"taU8UNB5oJrquzEiXBV+rTTnEq9XmaO9BKeLQQWWuyXJdZ6wR9G+FYrKPkYnXc30iS/9amSG272C8qqnPdM4OE0dvjIdWgSd\"}",
    "hashedPassword": "KNYr+guWkg77DbaWofgK72LrNdaQzzJGIkk2rEHqP9Y="
  },

  {
    "username": "10837785634",
    "password": "ishmael",
    "publicKey": "02f85a333b5a7db155285bdd39d61fa1b0c65550187e22b16f5a6d2f63b7f2df6c",
    "name": "Juan Diego Garcia",
    "email": "Jua@temp.co",
    "privateKey": "1ab38027228aef9a6642d6acbf7aa62e8db18795cc09c3e03586e49396afb3df",
    "encryptedKey": "{\"iv\":\"ao0PDb6ukW58Z6FaUDnjKQ==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"lAcyL1LM+Gs=\",\"ct\":\"txXSA33qYOmFmEQvL20VtbcvROLh4WWurhCaQKzsVd50x5KOyHnOzECxRlWr3VnpAErDdYRd3Nuq2jtC9KT4+DxhW2S10aeo\"}",
    "hashedPassword": "WYvPSxUEzs0jffzHa9fqQn1Q8BbZYUVhYr5ghAL4jn4="
  },

  {
    "username": "1029758588",
    "password": "starbuck",
    "publicKey": "02c0d076f5b30e16b56d468e4f4da4be0c1ce29370b9ab850cc4a7aec0bf4dbebc",
    "name": "Andres Leonardo Marinez",
    "email": "andres@temp.co",
    "privateKey": "a053435ccb852cbe0bbc1b9e6412d0393c71c367a1a4920fd5697e392e470ee0",
    "encryptedKey": "{\"iv\":\"zzLQ+X5SdKRF5uAZFGcy1A==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"/TZy27IbJ/g=\",\"ct\":\"7vV+E3zUdgt0Qp5IPfLPQuslPQoznYAmnGCHt1NFesn1xAuDJYpl6qiP37DCJuDuWgnZvyoJ7BzxZwNzylFwwqLZVjTgXpOu\"}",
    "hashedPassword": "jQwngNSrwaQPvjbGYYPXKrxuwUzPZXG1tRL2h6cfpco="
  },
  {
    "username": "1018485370",
    "password": "nobuo",
    "publicKey": "02cd3181dbd7d1539f470436ce222c53ab5e514f67809dc0095895e6cdfba97612",
    "name": "Monica Paola Bayona",
    "email": "pao@temp.co",
    "privateKey": "2f4175fa39e7d2a89884b492d741a494c2b4f1021d3b3deb7c93ab72cc84935c",
    "encryptedKey": "{\"iv\":\"h7h0uW9NqLB+VaKM7C8gSA==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"Kn8J+U0Ko98=\",\"ct\":\"w5bGmngbGIt8QIIi/42gVDujsJNUkGsLwmeminMSYIdQq0i+qWZBz1ZYalxitEsSte7NY/L/UrDcYE6drcAmSOvQNQdIkwFz\"}",
    "hashedPassword": "slf3UiKJzmcE03wvYFqcHselnMQlDOhhriovzXmGeyk="
  },

  {
    "username": "233058774494",
    "password": "bessie",
    "publicKey": "02fb5b3a093e20e420ecf9c5839215e74c97f49eb51889069eb87bc6f62ceca8dd",
    "name": "Maria Camila Rodrigues",
    "email": "maria@temp.biz",
    "privateKey": "68ca3f7423f76397a27eb1b4185e808b953fc5b82cfa3eb2fd375de1c2e53b4e",
    "encryptedKey": "{\"iv\":\"KuOUW7sBaqb9LIHdN1uATg==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"uiawGO8JPSA=\",\"ct\":\"A2llr54xkkxnrgvkSEDV9jIjoChmivkALO8G9c1tnQxb6qgRUWI/qcYvZxa3VxhjnZSEDeuCavF6yB8+TiPZ+0s7TgfpwfUj\"}",
    "hashedPassword": "90/BIv+IKk+4K3LY9IwWTEr+oNXXiTUXIMzBQdpUGUw="
  },

  {
    "username": "4958988587",
    "password": "ruggles",
    "publicKey": "0364edd42bd9b2dea1315e2da820b569665f96e36c44b267ceeac488cfdc03bf61",
    "name": "Carlos Rodriguez Dias",
    "email": "carlos@temp.me",
    "privateKey": "86f508f1e4bfd975ce747e38adb6bd8b01e5b80143520710126d4b53118c123c",
    "encryptedKey": "{\"iv\":\"5/v02joKWVzbQpBJBntsTg==\",\"v\":1,\"iter\":10000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"gebKHyPsM3E=\",\"ct\":\"iWU9myR6SXRO2pQKdaVUhFqHs9yd2P9wxdmOXsVKYZL/qynlYE1HnDoxmlHuhnRBOECOj2akaF4g4f/MZBGcshqWePObn+mH\"}",
    "hashedPassword": "SyoFXfALbmw/kP1yw4fDSddZHQBkMnX+LTkDj9jWiSo="
  }
]
// How many times to send each update per minute
// If 0, will send LIMIT updates immediately, then exit
export const RATE =  6

// Maximum number of times to repeat each update
export const LIMIT =  25



export const createUpdate = (privateKey, recordId, property) => {
  return createTxn(privateKey, encodeTimestampedPayload({
    action: protos.SCPayload.Action.UPDATE_PROPERTIES,
    updateProperties: protos.UpdatePropertiesAction.create({
      recordId,
      properties: [protos.PropertyValue.create(property)]
    })
  }))
}

export const getVariance = max => {
  if (typeof max === 'object') return _.mapValues(max, getVariance)
  const variance = max * VARIANCE_FACTOR * Math.pow(Math.random(), 2)
  return Math.random() < 0.5 ? -variance : variance
}

export const updateValue = (update, oldValue) => {
  if (typeof update.value === 'object') {
    return _.mapValues(update.value, (value, key) => {
      return updateValue(_.assign({}, update, { value }), oldValue[key])
    })
  }

  let value = getVariance(update.value)
  if (update.isAlwaysPositive) value = Math.abs(value)
  if (update.isAverage) value = update.value + value
  if (update.isRelative) value = oldValue + value
  return value
}

const updateProperty = (update, oldValue) => {
  oldValue = oldValue || update.startValue || null
  const { NUMBER, LOCATION } = protos.PropertySchema.DataType
  const property = _.pick(update, 'name', 'dataType')
  console.log(property)

  if (property.dataType === NUMBER) {
    property.numberValue = parseInt(updateValue(update, oldValue || 0))

  } else if (property.dataType === LOCATION) {
    const defaultLoc = { latitude: 0, longitude: 0 }
    const newLoc = updateValue(update, oldValue || defaultLoc)
    const intLoc = _.mapValues(newLoc, parseInt)

    if (intLoc.latitude > 90000000) intLoc.latitude = -90000000
    else if (intLoc.latitude < -90000000) intLoc.latitude = 90000000
    if (intLoc.longitude > 180000000) intLoc.longitude = -180000000
    else if (intLoc.longitude < -180000000) intLoc.longitude = 180000000

    property.locationValue = protos.Location.create(intLoc)

  } else if (property.name === 'tilt') {
    oldValue = JSON.parse(oldValue)

    const defaultTilt = { x: 0, y: 0 }
    const newTilt = updateValue(update, oldValue || defaultTilt)
    const intTilt = _.mapValues(newTilt, parseInt)

    property.stringValue = JSON.stringify(intTilt)

  } else if (property.name === 'estado') {

    console.log(update)




    const newState = updateValue(update, oldValue || "Activo")


    property.stringValue = JSON.stringify(newState)

  } else {
    throw new Error(`Bad update in JSON: ${property.name}`)
  }

  return property
}

const makeUpdateSubmitter = ( count = 0) => () => {
  if (count >= 1) return
  console.log(`Starting update set ${count + 1} of ${LIMIT}`)
  // Get current property values
  return get(`${SERVER}/records`)
  .then(res => {
      return JSON.parse(res).reduce((oldValues, record) => {
        return _.assign({
          [record.recordId]: _.zipObject(
            _.map(record.properties, prop => prop.name),
            _.map(record.properties, prop => prop.value))
        }, oldValues)
      }, {})
    })

    // Build update transactions
    .then(oldValues => {
      console.log(`Building updates . . .`)
      return updateGroups.reduce((updateTxns, group) => {
        group.updates.forEach(update => {
          if (update.noOpChance && Math.random() < update.noOpChance) return
          const oldValue = oldValues[group.recordId][update.name]
          console.log(oldValue)
          const prop = updateProperty(update, oldValue)
          updateTxns.push(createUpdate(group.privateKey, group.recordId, prop))
        })
        return updateTxns
      }, [])
    })

    // Send update transactions
    .then(updateTxns => {
      console.log(`Submitting ${updateTxns.length} update transactions . . .`)
      submitTxns(updateTxns)
    })

    // Set timeout to call self
    .then(() => {
      console.log('Updates committed.')
      const wait = RATE ? 60000 / RATE : 0
    })
}

const createProposal = (privateKey, action) => {
  return createTxn(privateKey, encodeTimestampedPayload({
    action: protos.SCPayload.Action.CREATE_PROPOSAL,
    createProposal: protos.CreateProposalAction.create(action)
  }))
}

const answerProposal = (privateKey, action) => {
  return createTxn(privateKey, encodeTimestampedPayload({
    action: protos.SCPayload.Action.ANSWER_PROPOSAL,
    answerProposal: protos.AnswerProposalAction.create(action)
  }))
}


export const actualizarCheques = (cheques, agents2) => {
  updateGroups  = req.body
  console.log(updateGroups)
  protos.compile()
    .then(awaitServerPubkey)
    .then(batcherPublicKey => {
      const txnCreators = {}


      createTxn = (privateKey, payload) => {
        if (!txnCreators[privateKey]) {
          txnCreators[privateKey] = getTxnCreator(privateKey, batcherPublicKey)
        }
        return txnCreators[privateKey](payload)
      }
    })
    .then(() => makeUpdateSubmitter()())
    .catch(err => {
      console.error(err.toString())
      process.exit()
    })
}
export const endosarCheques = (cheques, agents2) => {
  updateGroups  = cheques
  protos.compile()
    .then(awaitServerPubkey)
    .then(batcherPublicKey => {
      const txnCreators = {}

      createTxn = (privateKey, payload) => {
        if (!txnCreators[privateKey]) {
          txnCreators[privateKey] = getTxnCreator(privateKey, batcherPublicKey)
        }
        return txnCreators[privateKey](payload)
      }
    })
    .then(() => makeUpdateSubmitter()())
    .catch(err => {
      console.error(err.toString())
      process.exit()
    })

}

export const crearCheques = (cheques, agents2) => {
  const records  = cheques
  const agents  = agents2
  console.log(records)
  console.log(agents)
  protos.compile()
    .then(awaitServerPubkey)
    .then(batcherPublicKey => {
      const txnCreators = {}

      createTxn = (privateKey, payload) => {
        if (!txnCreators[privateKey]) {
          txnCreators[privateKey] = getTxnCreator(privateKey, batcherPublicKey)
        }
        return txnCreators[privateKey](payload)
      }
    })

    .then(() => {
      console.log('Creating Records . . .')
      const recordAdditions = records.map(record => {
        const properties = record.properties.map(property => {
          if (property.dataType === protos.PropertySchema.DataType.LOCATION) {
            property.locationValue = protos.Location.create(property.locationValue)
          }
          return protos.PropertyValue.create(property)
        })

        return createTxn(agents[record.ownerIndex || 0].privateKey, encodeTimestampedPayload({
          action: protos.SCPayload.Action.CREATE_RECORD,
          createRecord: protos.CreateRecordAction.create({
            recordId: record.recordId,
            recordType: record.recordType,
            properties
          })
        }))
      })

      return submitTxns(recordAdditions)
    })
    // Transfer Custodianship
    .then(() => {
      console.log('Transferring Custodianship . . .')
      const custodianProposals = records
        .filter(record => record.custodianIndex !== undefined)
        .map(record => {
          return createProposal(agents[record.ownerIndex || 0].privateKey, {
            recordId: record.recordId,
            receivingAgent: agents[record.custodianIndex].publicKey,
            role: protos.Proposal.Role.CUSTODIAN
          })
        })

      return submitTxns(custodianProposals)
    })
    .then(() => {
      const custodianAnswers = records
        .filter(record => record.custodianIndex !== undefined)
        .map(record => {
          return answerProposal(agents[record.custodianIndex].privateKey, {
            recordId: record.recordId,
            receivingAgent: agents[record.custodianIndex].publicKey,
            role: protos.Proposal.Role.CUSTODIAN,
            response: protos.AnswerProposalAction.Response.ACCEPT
          })
        })

      return submitTxns(custodianAnswers)
    })

    // Authorize New Reporters
    .then(() => {
      console.log('Authorizing New Reporters . . .')
      const reporterProposals = records
        .filter(record => record.reporterIndex !== undefined)
        .map(record => {
          return createProposal(agents[record.ownerIndex || 0].privateKey, {
            recordId: record.recordId,
            receivingAgent: agents[record.reporterIndex].publicKey,
            role: protos.Proposal.Role.REPORTER,
            properties: record.reportableProperties
          })
        })

      return submitTxns(reporterProposals)
    })
    .then(() => {
      const reporterAnswers = records
        .filter(record => record.reporterIndex !== undefined)
        .map(record => {
          return answerProposal(agents[record.reporterIndex].privateKey, {
            recordId: record.recordId,
            receivingAgent: agents[record.reporterIndex].publicKey,
            role: protos.Proposal.Role.REPORTER,
            response: protos.AnswerProposalAction.Response.ACCEPT
          })
        })

      return submitTxns(reporterAnswers)
    })
    .catch(err => {
      console.error(err.toString())
      process.exit()
    })

}

export const crearAgente = (users) => {
  const agents = users
  protos.compile()
    .then(awaitServerPubkey)
    .then(batcherPublicKey => {
      const txnCreators = {}
      console.log()

      createTxn = (privateKey, payload) => {
        if (!txnCreators[privateKey]) {
          txnCreators[privateKey] = getTxnCreator(privateKey, batcherPublicKey)
        }
        return txnCreators[privateKey](payload)
      }
    })

    // Create Agents
    .then(() => {
      console.log('Creating Agents . . .')
      const agentAdditions = agents.map(agent => {
        return createTxn(agent.privateKey, encodeTimestampedPayload({
          action: protos.SCPayload.Action.CREATE_AGENT,
          createAgent: protos.CreateAgentAction.create({ name: agent.name })
        }))
      })

      return submitTxns(agentAdditions)
    })

    // Create Users
    .then(() => {
      console.log('Creating Users . . .')
      const userRequests = agents.map(agent => {
        const user = _.omit(agent, 'name', 'privateKey', 'hashedPassword')
        user.password = agent.hashedPassword
        return post(`${SERVER}/users`, user)
      })

      return Promise.all(userRequests)
    })


}

