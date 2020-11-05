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
    RecordTypeContainer,
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
                    getActionField(payload, SCPayloadFields.create_record.name)
                )
                break

            case "FINALIZE_RECORD":
                await finalizeRecord(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.finalize_record.name)
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
                    getActionField(payload, SCPayloadFields.answer_proposal.name)
                )
                break

            case "REVOKE_REPORTER":
                await revokeReporter(
                    context,
                    signerPublicKey,
                    timestamp,
                    getActionField(payload, SCPayloadFields.revoke_reporter.name)
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

async function createProposal(context, signerPublicKey, timestamp, {record_id, receiving_agent, role, properties}) {
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


async function answerProposal(context, signerPublicKey, timestamp, {record_id, receiving_agent, role, response}) {
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

async function revokeReporter(context, signerPublicKey, timestamp, {record_id, reporter_id, properties}) {
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

async function isOwner(record, agent_id) {
    return record.custodians[record.custodians.length-1].agent_id == agent_id
}

async function isCustodian(record, agent_id) {
    return record.custodians[record.custodians.length-1].agent_id == agent_id
}

async function getRecord(context, record_id) {
    let  recordAddress = make_record_address(record_id)
    let record_container = getContainer(context, recordAddress, "RECORD")

    var obj = {
        container: record_container,
        address: recordAddress
    }

    return obj
}

async function get_record_type(context, type_name) {
    const type_address = make_record_type_address(type_name)

    let type_container = getContainer(context, type_address, "RECORD_TYPE")

    var obj = {
        container: type_container,
        address: type_address
    }

    return obj
}



async function get_property(context, record_id, property_name) {
    const propertyAddress = make_property_address(record_id, property_name, 0)

    let property_container = getContainer(context, propertyAddress, "PROPERTY")

    var obj = {
        container: property_container,
        address: propertyAddress
    }

    return obj
}


async function set_new_property(context, record_id, property_name, struct_properties, enum_options, fixed, number_exponent, unit, data_type, publickey) {
    const propertyAddress = make_property_address(record_id, property_name, 0)


    let property_container = getContainer(context, propertyAddress, "PROPERTY")


    let newProperty = Property.create({
        signer: publickey,
        record_id: record_id,
        data_type: data_type,
        current_page: 1,
        wrapped: false,
        reporters: [],
        fixed: fixed,
        number_exponent: number_exponent,
        unit: unit,
        enum_options: enum_options,
        struct_properties: struct_properties
    })

    newProperty.reporters.push(Property.Reporter.create({
            public_key: publickey,
            authorized: true,
            index: 0
        }
    ))

    property_container.entries.push([newProperty])

    setContainer(context, propertyAddress, property_container)
}


async function set_new_propertyPage(context, timestamp, record_id, property_name, value, page_number) {
    const propertyAddress = make_property_address(record_id, property_name, 0)


    let property_container = getContainer(context, propertyAddress, "PROPERTY")

    let page = PropertyPage.create({
        name: property_name,
        record_id: record_id,
        reported_values: []
    })


    if (value) {

        page.reported_values.push()
    }


    property_container.entries.push([page])

    setContainer(context, propertyAddress, property_container)
}

async function make_new_reported_value(reporter_index, timestamp, prop) {

    let reported_value = PropertyPage.ReportedValue.create({
        reporter_index: reporter_index,
        timestamp: timestamp,
    })


    var DATA_TYPE_TO_ATTRIBUTE = {}

    DATA_TYPE_TO_ATTRIBUTE[PropertySchema.BYTES] = 'bytes_value'
    DATA_TYPE_TO_ATTRIBUTE[PropertySchema.STRING] = 'string_value'
    DATA_TYPE_TO_ATTRIBUTE[PropertySchema.INT] = 'int_value'
    DATA_TYPE_TO_ATTRIBUTE[PropertySchema.FLOAT] = 'float_value'


    switch (prop.data_type) {
        case PropertySchema.BYTES:
            reported_value.bytes_value = prop.bytes_value;
            break;
        case PropertySchema.BOOLEAN:

            reported_value.boolean_value = prop.boolean_value;

            break;
        case PropertySchema.NUMBER:

            reported_value.boolean_value = prop.number_value;

            break;
        case PropertySchema.STRING:

            reported_value.boolean_value = prop.string_value;

            break;
        case PropertySchema.ENUM:
            reported_value.bytes_value = prop.enum_value;
            break;


        default:
            let text = "I have never heard of that fruit...";
    }




    return reported_value




}


async function getContainer(context, address, entity) {

    let container = null
    switch (entity) {
        case "AGENT":
            container = AgentContainer;
            break;
        case "PROPERTY":
            if (address.substr(-4) === "0000") {
                container = PropertyContainer;
            } else {
                container = PropertyPageContainer;
            }

            break;
        case "PROPOSAL":
            container = ProposalContainer;
            break;
        case "RECORD":
            container = RecordContainer;
            break;
        case "RECORD_TYPE":
            container = RecordTypeContainer;
            break;

        default:
            let text = "I have never heard of that fruit...";
    }

    const entries = await context.getState([address])
    console.log(entries)

    let data = null
    if (entries !== null) {
        data = entries[0].data


    }

    return container.decode(data)
}

async function setContainer(context, address, container, entity) {


    const updates = {}
    let entityContainer = null

    switch (entity) {
        case "AGENT":
            entityContainer = Agent;
            break;
        case "PROPERTY":

            entityContainer = Property;

            break;
        case "PROPOSAL":
            entityContainer = Proposal;
            break;
        case "RECORD":
            entityContainer = Record;
            break;
        case "RECORD_TYPE":
            entityContainer = RecordType;
            break;

        default:
            let text = "I have never heard of that fruit...";
    }

    // Record field.
    updates[address] = entityContainer.encode(container).finish()

    await context.setState(updates)


}


module.exports = ChequesHandler
