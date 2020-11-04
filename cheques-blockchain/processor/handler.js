'use strict'

const {
    reject,
    isValidPublicKey,
    isPublicKeyUsed,
    checkStateAddresses,
    isPresent,
    getActionField,
} = require('./services/utils')
const {
    make_proposal_address,
    make_agent_address,
    make_record_address,
    make_record_type_address,
    make_property_address_range,
    make_property_address,
    hashAndSlice,
    FULL_PREFIXES,
    TYPE_PREFIXES,
} = require('./services/addressing')

const {
    Agent,
    AgentContainer,
    Record,
    RecordContainer,
    Property,
    PropertyContainer,
    PropertyPage,
    PropertyValue,
    PropertyPageContainer,
    Proposal,
    ProposalContainer,
    PropertySchema,
    RecordType,
} = require('./services/proto')

const {TransactionHandler} = require('sawtooth-sdk/processor/handler')
const {TpProcessRequest} = require('sawtooth-sdk/protobuf')
const {FAMILY_NAME, NAMESPACE, VERSION} = require('./services/addressing')
const {
    SCPayload,
    SCPayloadActions,
    SCPayloadFields
} = require('./services/proto')



/**
 * Extension of TransactionHandler class in order to implement the SawChain Transaction Processor logic.
 */
class ChequesHandler extends TransactionHandler {
    /**
     * TransactionHandler constructor registers itself with the validator, declaring which family name, versions, and
     * namespaces it expects to handle.
     */
    constructor() {
        super(FAMILY_NAME, [VERSION], [NAMESPACE])
    }

    /**
     * Evaluate and execute every transaction updating the state according to the action.
     * @param {TpProcessRequest} txn Transaction that is requested to be process.
     * @param {Context} context Object used to write/read in Sawtooth ledger state.
     */
    async apply(txn, context) {
        // Retrieve SawChain payload object from txn.
        const payload = SCPayload.decode(txn.payload)
        const action = payload.action
        const signerPublicKey = txn.header.signerPublicKey
        const timestamp = payload.timestamp

        // Validation: Payload timestamp is not set.
        if (!timestamp.low && !timestamp.high)
            reject(`Payload timestamp is not set.`)

        // Action handling.
        switch (action) {
            case "CREATE_AGENT":
                await createAgent(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.create_agent.name)
                )
                break

            case "CREATE_RECORD":
                await createRecord(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload,SCPayloadFields.create_record.name)
                )
                break

            case "FINALIZE_RECORD":
                await finalizeRecord(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload,SCPayloadFields.finalize_record.name)
                )
                break

            case "CREATE_RECORD_TYPE":
                await createRecordType(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.create_record_type.name)
                )
                break

            case "UPDATE_PROPERTIES":
                await updateProperties(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.update_properties.name)
                )
                break

            case "CREATE_PROPOSAL":
                await createProposal(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.create_proposal.name)
                )
                break

            case "ANSWER_PROPOSAL":
                await answerProposal(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.answer_proposal.name )
                )
                break

            case "REVOKE_REPORTER":
                await revokeReporter(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.revoke_reporter.name )
                )
                break

            default:
                reject(`Unknown action: ${action}`)
        }
    }


}




async function createAgent(context, signerPublicKey, timestamp, {name}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

async function createRecord(
    context,
    signerPublicKey,
    timestamp,
    {record_id, record_type, properties},
) {

    // Validation: No name specified.
    if (!record_id) {
        reject('No se ingreso el id del cheque')
    }


    // Validation: No website specified.
    if (!properties) {
        reject('No se ingresaron los campos')
    }

    // Validation: Admin field doesn't contain a valid public key.
    if (!isValidPublicKey(admin)) {
        reject('La llave publica no es valida')
    }

    const agentAddress = make_agent_address(signerPublicKey)
    const idRecord = make_record_address(record_id)
    const recordType = make_record_type_address(record_type)

    const state = await context.getState([agentAddress, idRecord, recordType])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length <= 0) {
        reject('No existe el usuario')
    }
    if (state[idRecord].length > 0) {
        reject('Ya existe un cheque con ese id')
    }
    if (state[recordType].length <= 0) {
        reject('No se ha definido el modelo de cheques')
    }


    const agent = Agent.decode(state[agentAddress])
    const record = Record.decode(state[idRecord])
    const recordtype = RecordType.decode(state[recordType])

    var type_schemata = {};

    var prop;
    for (prop in recordtype.properties) {
        type_schemata[prop.name] = prop
    }

    var required_properties = {};

    for (var name in type_schemata) {
        if (type_schemata[name].required) {
            required_properties[name] = type_schemata[name]
        }

    }

    var provided_properties = {};

    for (var prop in properties) {

        provided_properties[prop.name] = prop

    }

    for (var prop in required_properties) {

        if (prop in provided_properties) {


        } else {
            reject('Required property not provided')
        }

    }

    for (var provided_name in provided_properties) {
        let required_type = type_schemata[provided_name].data_type
        let provided_type = provided_properties[provided_name].data_type

        if (required_type !== provided_type) {

            reject("Value provided is the wrong type")
        }

    }


    let RecordNuevo = Record.create({
        record_id: record_id,
        record_type: record_type,
        final: false,

    })


    RecordNuevo.owners.push(Record.AssociatedAgent.create({
        agent_id: signerPublicKey,
        timestamp: timestamp,
    }))

    RecordNuevo.custodians.push(Record.AssociatedAgent.create({
        agent_id: signerPublicKey,
        timestamp: timestamp,
    }))

    for (var name in type_schemata) {


        let newProperty = Property.create({
            signer: signerPublicKey,
            record_id: record_id,
            data_type: type_schemata[name].data_type,
            current_page: 1,
            wrapped: false,
            fixed: type_schemata[name].fixed,
            number_exponent: type_schemata[name].number_exponent,
            unit: type_schemata[name].unit,
            enum_options: type_schemata[name].enum_options,
            struct_properties: type_schemata[name].struct_properties,
        })

        newProperty.reporters.push(Property.Reporter.create({
                public_key: signerPublicKey,
                authorized: true,
                index: 0
            }
        ))

        await context.setState(updates)


    }





}


async function createRecordType(context, signerPublicKey, timestamp, {name, properties}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

async function updateProperties(context, signerPublicKey, timestamp, {record_id, properties}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

async function finalizeRecord(context, signerPublicKey, timestamp, {record_id}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

async function createProposal(context, signerPublicKey, timestamp, {record_id, receiving_agent,role,  properties}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}


async function answerProposal(context, signerPublicKey, timestamp, {record_id, receiving_agent,role, response}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

async function revokeReporter(context, signerPublicKey, timestamp, {record_id, reporter_id,properties}) {
    const agentAddress = make_agent_address(signerPublicKey)

    const state = await context.getState([agentAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length > 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}







async function set_property(context, record_id, property_name, property) {
    const propertyAddress = make_property_address(record_id, property_name, 0)

    const state = await context.getState([propertyAddress])

    // Validation: System Admin is already recorded.
    if (state[propertyAddress].length > 0) {
        reject('Ya existe el atributo')
    }

    let RecordNuevo = Property.create({
        record_id: record_id,
        record_type: record_type,
        final: false,

    })

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}


async function getRecord(context, record_id) {
    const recordAddress = make_record_address(record_id)

    const state = await context.getState([recordAddress])

    // Validation: System Admin is already recorded.
    if (state[agentAddress].length < 0) {
        reject('Ya existe el usuario')
    }

    // State update.
    const updates = {}

    updates[agentAddress] = Agent.encode({
        publicKey: signerPublicKey,
        timestamp: timestamp,
        name: name,
    }).finish()

    await context.setState(updates)
}

module.exports = ChequesHandler
