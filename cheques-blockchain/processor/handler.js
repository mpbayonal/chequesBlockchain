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
            case 0:

                console.log("payload.createAgent.CreateAgentAction.name")
                console.log(payload.createAgent)
                console.log(payload.createAgent["name"])
                console.log(payload.createAgent.name)

                await crearUsuario(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.createAgent
                )
                break

            case 1:
                console.log(payload)
                await crearCheque(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.createRecord
                )
                break

            case 2:
                console.log(payload)
                await finalizeRecord(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.finalizeRecord
                )
                break

            case 3:
                console.log(payload.createRecordType)

                await createRecordType(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.createRecordType
                )
                break

            case 4:
                console.log(payload)
                await actualizarCampo(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.updateProperties
                )
                break

            case 5:
                console.log(payload)
                await createProposal(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.createProposal
                )
                break

            case 6:
                console.log(payload)
                await answerProposal(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.answerProposal
                )
                break

            case 7:
                console.log(payload)
                await revokeReporter(
                    context,
                    signerPublicKey,
                    timestamp,
                    payload.revokeReporter
                )
                break

            default:

                reject(`Unknown action: ${action}`)
        }
    }


}


/**
 * Agregar un nuevo usuario al Blockchain
 * @entrada {String} Llave publica del usuario a registrar
 * @entrada {Object} timestamp Fecha del momento en que es enviada la transaccion
 * @param {String} name Nombre del usuario a registrar.
 * @param {String} cedula Identificacion unica del usuario
 */
async function crearUsuario(context, signerPublicKey, timestamp, {name}) {


    if (!name) {
        reject('El nombre del usuario no debe estar vacio')
    }
    //SE OBTIENE LA DIRECCION DEL USUARIO EN TERMINOS DEL BLOCKCHAIN
    const address = make_agent_address(signerPublicKey)

    //SE BUSCA LA DIRECCION DEL USUARIO EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const agenttemp = await AgentContainer.decode(state[address])


    console.log("typeTemp.entries")


    //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
    let entro = false
    let t = true
    for (var key in agenttemp.entries) {
        entro = true

        //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
        if (agenttemp.entries[key].publicKey === signerPublicKey) {

            reject('Ya existe el usuario')
        }

    }

    if (t) {

        //SE CREA EL NUEVO USUARIO
        let agent2 = Agent.create({
            publicKey: signerPublicKey,
            timestamp: timestamp,
            name: name,
        })


        let t = true
        for (var key in state) {
            t = false


            if (state[key]) {

                let updates = {}
                let t = AgentContainer.decode(state[key])
                t.entries.push(agent2)

                //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
                let se = await AgentContainer.encode(t).finish()
                updates[address] = se
                //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
                await context.setState(updates)


            }
        }
        if (t) {
            //ENTRA SI NO EXISTE UN CONTENEDOR DE USUARIOS EN EL BLOCKCHAIN


            let newcontainer = AgentContainer.create({
                entries: [],
            })


            newcontainer.entries.push(agent2)

            let updates = {}
            //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
            let se = await AgentContainer.encode(newcontainer).finish()
            updates[address] = se
            //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
            await context.setState(updates)
        }


        console.log("creado")
    }


}

/**
 * Agregar un nuevo cheque al Blockchain
 * @entrada {String} Llave publica del usuario que es el primer beneficiario del cheque
 * @entrada {Object} timestamp Fecha del momento en que es enviada la transaccion
 */
async function crearCheque(
    context,
    signerPublicKey,
    timestamp,
    {recordId, recordType, properties},
) {

    // SE VALIDA QUE SE INGRESARON TODOS LOS DATOS
    if (!recordId) {
        reject('No se ingreso el id del cheque')
    }


    // SE VALIDA QUE SE INGRESARON TODOS LOS CAMPOS
    if (!properties) {
        reject('No se ingresaron los campos')
    }

    // SE VALIDA QUE EXISTE EL USUARIO
    if (verificarUsuario(context, signerPublicKey)) {


        //SE OBTIENE LA DIRECCION DEL CHEQUE ESPECIFICO EN TERMINOS DEL BLOCKCHAIN
        const address = make_record_address(recordId)

        //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
        let state = await context.getState([address])

        //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
        const recordTemp = await RecordContainer.decode(state[address])
        console.log(recordTemp)
        for (var key in recordTemp.entries) {


            //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
            if (recordTemp.entries[key].name === recordType) {

                reject('Ya existe un cheque con ese id')
            }

        }


        //SE OBTIENE LA DIRECCION DEL TIPO DE CHEQUE EN TERMINOS DEL BLOCKCHAIN
        const addressType = make_record_type_address(recordType)

        //SE BUSCA EL TIPO DEL CHEQUE EN EL BLOCKCHAIN
        let stateType = await context.getState([addressType])

        //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
        const typeTemp = await RecordTypeContainer.decode(stateType[addressType])


        console.log("typeTemp.entries")
        let type = null

        //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
        let entro = false
        for (var key in typeTemp.entries) {
            entro = true

            //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
            if (typeTemp.entries[key].name !== recordType) {

                reject('No existe este tipo de cheque')
            }
            if (typeTemp.entries[key].name === recordType) {
                type = typeTemp.entries[key]

            }
        }
        if (!entro) {
            reject('No existe este tipo de cheque')
        }

        console.log("typeTemp")

        //SE GUARDAN LOS CAMPOS QUE SE PUEDEN INGRESAR PARA EL TIPO DE CHEQUE INGRESADO
        var type_schemata = {};
        for (let prop in type.properties) {
            type_schemata[type.properties[prop].name] = type.properties[prop]
        }

        //SE GUARDAN LOS CAMPOS OBLIGATORIOS PARA EL TIPO DE CHEQUE INGRESADO
        var required_properties = {};
        for (let name in type_schemata) {
            if (type_schemata[name].required) {
                required_properties[name] = type_schemata[name]
            }

        }

        //SE GUARDAN LOS CAMPOS INGRESADOS POR EL USUARIO PARA LA CREACION DEL CHEQUE
        var provided_properties = {};
        for (let prop2 in properties) {
            provided_properties[properties[prop2].name] = properties[prop2]


        }

        console.log(type_schemata)
        console.log(required_properties)
        console.log(provided_properties)
        //SE VALIDA QUE SE HAYAN INGRESADO TODOS LOS CAMPOS OBLIGATORIOS
        for (let prop3 in required_properties) {

            if (prop3 in provided_properties) {

            } else {
                reject('No se ingreso un campo obligatorio')
            }

        }


        console.log("SE VALIDA QUE TODOS LOS CAMPOS ESTEN EN EL FORMATO CORRECTO")
        //SE VALIDA QUE TODOS LOS CAMPOS ESTEN EN EL FORMATO CORRECTO
        for (let provided_name in provided_properties) {
            let required_type = type_schemata[provided_name].dataType
            let provided_type = provided_properties[provided_name].dataType

            if (required_type !== provided_type) {

                reject("El valor de uno de los campos esta en un formato icorrecto")
            }

        }


        console.log("SE CREA EL CHEQUE NUEVO")
        //SE CREA EL CHEQUE NUEVO
        let ChequeNuevo = Record.create({
            recordId: recordId,
            recordType: recordType,
            final: false,
            owners: [],
            custodians: []

        })


        let own = await Record.AssociatedAgent.create({
            agentId: signerPublicKey,
            timestamp: timestamp,
        })
        ChequeNuevo.owners.push(own)

        ChequeNuevo.custodians.push(own)

        //SE OBTIENE LA DIRECCION DEL CHEQUE ESPECIFICO EN TERMINOS DEL BLOCKCHAIN
        const address2 = make_record_address(recordId)

        //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
        let state2 = await context.getState([address2])
        let temp = await RecordContainer.decode(state[address2])
        console.log(temp)
        console.log("temp")

        let t = true
        let number = 0;
        for (let key in state2) {

            t = false

            if (state2[key]) {


                let updates = {}


                let number = 0;
                for (let y in temp.entries) {

                    if (temp.entries[y].recordId === recordId) {
                        temp.entries.splice(number, 1);

                    }
                    number = number + 1
                }

                temp.entries.push(ChequeNuevo)
                temp.entries.sort((a, b) => a.recordId === b.recordId ? 0 : a.recordId < b.recordId || -1);


                //SE CODIFICA EL NUEVO CHEQUE EN TERMINOS DEL BLOCKCHAIN
                let se = await RecordContainer.encode(temp).finish()
                updates[address2] = se

                //SE CREA EL NUEVO CHEQUE EN EL BLOCKCHAIN
                await context.setState(updates)
                console.log(temp)
                console.log("Se anadio el record")

                number = number + 1
                console.log("SE CREA EL NUEVO CHEQUE EN EL BLOCKCHAIN")
                let state3 = await context.getState([
                    address2
                ])
                const agenttemp2 = await RecordContainer.decode(state3[address2])
                console.log(agenttemp2)


            }
        }

        if (t) {
            console.log("ENTRA SI NO EXISTE UN CONTENEDOR DE CHEQUES EN EL BLOCKCH")
            //ENTRA SI NO EXISTE UN CONTENEDOR DE CHEQUES EN EL BLOCKCHAIN


            let newcontainer = RecordContainer.create({
                entries: [],
            })


            newcontainer.entries.push(ChequeNuevo)


            let updates = {}
            //SE CODIFICA EL NUEVO CHEQUE EN TERMINOS DEL BLOCKCHAIN
            let se = await RecordContainer.encode(newcontainer).finish()
            updates[address] = se
            //SE CREA EL NUEVO CHEQUE EN EL BLOCKCHAIN
            await context.setState(updates)

        }
        console.log(number)

    } else {

        reject('No existe el usuario que quiere crear el cheque')

    }


    for (let name2 in type_schemata) {

        let new_property = await Property.create({
            signer: signerPublicKey,
            recordId: recordId,
            name: type_schemata[name2].name,
            dataType: type_schemata[name2].dataType,
            currentPage: 1,
            wrapped: false,
            reporters: [],
            fixed: type_schemata[name2].fixed,
            numberExponent: type_schemata[name2].numberExponent,
            unit: type_schemata[name2].unit,
            enumOptions: type_schemata[name2].enumOptions,
            structProperties: type_schemata[name2].structProperties
        })

        console.log("type_schemata DATOS")
        console.log(name2)
        console.log(type_schemata[name2])

        await set_new_property(
            context,
            recordId,
            name2,
            new_property,
            signerPublicKey
        )

        let page = await PropertyPage.create({
            name: name2,
            recordId: recordId,
            reportedValues: []
        })


        if (name2 in provided_properties) {
            let provided_property = provided_properties[name2]
            let reported_value = await make_new_reported_value(0, timestamp, provided_property, new_property)

            page.reportedValues.push(reported_value)

        }

        await set_new_propertyPage(context, timestamp, recordId, name2, page, 1)


    }


}


async function createRecordType(context, signerPublicKey, timestamp, {name, properties}) {
    if (!name) {

        reject('No se ingreso el campo del nombre del cheque')

    }
    if (!properties) {

        reject('No se ingreso ninguna propiedad')
    }

    for (let prop of properties) {

        if (!prop.name) {

            reject('No se ingreso en nombre de la propiedad')
        }

    }

    //SE GUARDAN LOS CAMPOS INGRESADOS POR EL USUARIO PARA LA CREACION DEL TIPO CHEQUE
    var provided_properties = {};
    for (let prop2 in properties) {

        provided_properties[prop2.name] = prop2

    }


    const address = make_record_type_address(name)


    let state = await context.getState([
        address
    ])

    const container = await RecordType.decode(state[address])


    //SE CREA EL NUEVO TIPO DE CHEQUE
    let record_type = RecordType.create({
        name: name,
        properties: properties

    })
    console.log(container)
    console.log(container.entries)

    //SE BUSCA EL TIPO DEL CHEQUE EN EL BLOCKCHAIN
    let stateType = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const typeTemp = await RecordTypeContainer.decode(stateType[address])


    console.log("typeTemp.entries")
    let type = null

    //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
    let entro = false
    for (var key in typeTemp.entries) {
        entro = true

        //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
        if (typeTemp.entries[key].name === name) {

            reject('Ya existe este tipo de cheque')
        }
    }


    console.log("entro")
    let t = true
    for (var key in state) {
        t = false
        console.log(state[key])
        // check if the property/key is defined in the object itself, not in parent
        if (state[key]) {

            let updates = {}
            let t = RecordTypeContainer.decode(state[address])
            t.entries.push(record_type)
            console.log(t)
            //SE CODIFICA EL NUEVO TIPO DE CHEQUE EN TERMINOS DEL BLOCKCHAIN
            let se = await RecordTypeContainer.encode(t).finish()
            updates[address] = se
            console.log(updates)
            //SE CREA EL NUEVO TIPO DE CHEQUE EN EL BLOCKCHAIN
            await context.setState(updates)
            let state2 = await context.getState([
                address,
            ])
            const agenttemp2 = await RecordTypeContainer.decode(state2[address])
            const agenttemp3 = await RecordType.decode(state2[address])
            console.log(agenttemp2)
            console.log(agenttemp3)

        }
    }
    if (t) {

        //ENTRA SI NO EXISTE UN CONTENEDOR DE TIPOS DE CHEQUES EN EL BLOCKCHAIN


        let newcontainer = RecordTypeContainer.create({
            entries: [],
        })


        newcontainer.entries.push(record_type)


        let updates = {}
        //SE CODIFICA EL NUEVO TIPO DE CHEQUE EN TERMINOS DEL BLOCKCHAIN
        let se = await RecordTypeContainer.encode(newcontainer).finish()
        updates[address] = se
        //SE CREA EL NUEVO TIPO DE CHEQUE EN EL BLOCKCHAIN
        await context.setState(updates)
    }


    console.log("creado")


}

/**
 * Agregar un nuevo cheque al Blockchain
 * @entrada {String} Llave publica del usuario que realiza la transaccion
 * @entrada {Object} timestamp Fecha del momento en que es enviada la transaccion
 * @entrada {String} record_id Identificador del cheque
 * @entrada {Objeto} properties Campos que van a aser actualizados
 */
async function actualizarCampo(context, signerPublicKey, timestamp, {recordId, properties}) {



    //SE OBTIENE LA DIRECCION DEL CHEQUE ESPECIFICO EN TERMINOS DEL BLOCKCHAIN
    const address = make_record_address(recordId)

    //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const recordTemp = await RecordContainer.decode(state[address])
    console.log(recordTemp)
    let existe = false
    for (var key in recordTemp.entries) {


        //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
        if (recordTemp.entries[key].recordId === recordId) {
            existe = true

            if (recordTemp.entries[key].final === true) {

                reject('El estado del cheque ya no permite realizar ningun cambio')

            }


        }

    }
    if (!existe) {
        reject('No existe un cheque con ese id')
    }


    let updates = properties
    console.log(updates)

    var provided_properties = {};
    for (let prop2 in updates) {
        provided_properties[updates[prop2].name] = updates[prop2]
        let prop = get_property(context, recordId, updates[prop2].name)
        if (updates[prop2].fixed) {

            reject('La propiedad no puede ser actualizada')
        }
        if (updates[prop2].dataType !== prop.dataType) {

            reject('La pactualizacion no tiene el tipo de datos correcto')
        }
        let page_number = prop.currentPage

        let page = get_property_page(context , recordId, updates[prop2].name, page_number)

        let reported_value = await make_new_reported_value(0, timestamp, updates[prop2], prop)

        page.reportedValues.push(reported_value)

        page.reportedValues.sort((a, b) => a.timestamp === b.timestamp ? 0 : a.timestamp > b.timestamp || -1);

        await set_new_propertyPage(context, timestamp, recordId,updates[prop2].name, page, page_number)

        if(page.reportedValues.length >= 256 ){

            let  new_page_number = page_number + 1
            let PROPERTY_PAGE_MAX_LENGT = 16 ** 4 - 1
            if(new_page_number > PROPERTY_PAGE_MAX_LENGT){
                new_page_number = 1
            }
            let new_pageContainer = await get_property_page(context,recordId,updates[prop2].name,new_page_number)
            let new_page = null;
            let existe2 = false
            for (var key3 in new_pageContainer.entries) {
                existe2 = true

                //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
                if (new_pageContainer.entries[key3].name === updates[prop2].name) {

                    new_pageContainer.entries[key3].reportedValues = []
                    new_page = new_pageContainer.entries[key3]


                }

            }
            if (!existe2) {

                new_page = await PropertyPage.create({
                    name: updates[prop2].name,
                    recordId: recordId,
                    reportedValues: []
                })

            }
            await set_new_propertyPage(context, timestamp, recordId,updates[prop2].name,new_page,new_page_number)
            prop.currentPage = new_page_number
            if(new_page_number === 1 && !prop.wrapped ){
                prop.wrapped = true

            }
            await set_new_property(context,recordId,updates[prop2].name,prop,signerPublicKey)



        }


    }



}

async function finalizeRecord(context, signerPublicKey, timestamp, {record_id}) {
    let recordtemp = await getRecord(context, record_id)

    if (isOwner(record_id, signerPublicKey || isCustodian(record_id, signerPublicKey))) {
        reject('El susuario no tiene los permisos para eealizar la accion')
    }

    if (recordtemp.record.final === true) {

        reject('El cheque ya esta en estado protestado o materializado ')
    }

    recordtemp.record.final = true

    await setContainer(context, recordtemp.address, recordtemp.container, "RECORD")

}

async function get_property(context, record_id, property_name) {

    const address = make_property_address(record_id, property_name, 0)

    //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const temp = await PropertyContainer.decode(state[address])
    console.log(temp)
    let existe = false
    for (var key in temp.entries) {


        //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
        if (temp.entries[key].name === property_name) {
            existe = true

            return temp.entries[key]


        }

    }
    if (!existe) {
        reject('No existe la propiedad')
    }

}

async function get_property_page(context, record_id, name, page_number) {

    const address = make_property_address(record_id, name, page_number)

    //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const temp = await PropertyPageContainer.decode(state[address])
    console.log(temp)
    let existe = false
    for (var key in temp.entries) {


        //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
        if (temp.entries[key].name === name) {
            existe = true

            return temp.entries[key]


        }

    }
    if (!existe) {
        reject('No existe la pagina de la propiedad')
    }
}

/**
 * Verififca si un usario existe en el blockchain
 */
async function verificarUsuario(context, publicKey) {
    //SE OBTIENE LA DIRECCION DEL USUARIO EN TERMINOS DEL BLOCKCHAIN
    const address = make_agent_address(publicKey)

    //SE BUSCA LA DIRECCION DEL USUARIO EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const agenttemp = await AgentContainer.decode(state[address])


    for (var key in agenttemp.entries) {


        //SE VALIDA QUE EXISTA EL TIPO DE CHEQUE
        if (agenttemp.entries[key].publicKey === publicKey) {
            return true
        }

    }
    return false


}

async function createProposal(context, signerPublicKey, timestamp, {recordId, receivingAgent, role, properties}) {


    if (!verificarUsuario(context, signerPublicKey)) {
        reject('No existe el usuario')
    }
    if (!verificarUsuario(context, receiving_agent)) {
        reject('No existe el usuario al que se va transferir el cheque')
    }

    const address = make_record_address(recordId)

    //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
    let state = await context.getState([address])

    //SE DECODIFICA LO QUE LLEGO DEL BLOCKCHAIN
    const recordTemp = await RecordContainer.decode(state[address])
    console.log(recordTemp)
    let existe = false
    for (var key in recordTemp.entries) {


        //SE VALIDA QUE NO EXISTA UN CHEQUE CON EL MISMO ID
        if (recordTemp.entries[key].recordId === recordId) {

            existe = true



            if (recordTemp.entries[key].final === true) {

                reject('El estado del cheque ya no permite realizar ningun cambio')

            }

            let own = await Record.AssociatedAgent.create({
                agentId: receivingAgent,
                timestamp: timestamp,
            })




            if (role === 2) {
                recordTemp.entries[key].owners.push(own)
            }
            if (role === 3) {
                recordTemp.entries[key].custodians.push(own)
            }




            const address2 = make_record_address(recordId)

            //SE BUSCA EL CHEQUE EN EL BLOCKCHAIN
            let state2 = await context.getState([address2])
            let temp = await RecordContainer.decode(state[address2])
            console.log(temp)
            console.log("temp")

            let t = true
            let number = 0;
            for (let key in state2) {

                t = false

                if (state2[key]) {


                    let updates = {}


                    let number = 0;
                    for (let y in temp.entries) {

                        if (temp.entries[y].recordId === recordId) {
                            temp.entries.splice(number, 1);

                        }
                        number = number + 1
                    }

                    temp.entries.push(recordTemp.entries[key])
                    temp.entries.sort((a, b) => a.recordId === b.recordId ? 0 : a.recordId < b.recordId || -1);


                    //SE CODIFICA EL NUEVO CHEQUE EN TERMINOS DEL BLOCKCHAIN
                    let se = await RecordContainer.encode(temp).finish()
                    updates[address2] = se

                    //SE CREA EL NUEVO CHEQUE EN EL BLOCKCHAIN
                    await context.setState(updates)
                    console.log(temp)
                    console.log("Se anadio el record")

                    number = number + 1
                    console.log("SE CREA EL NUEVO CHEQUE EN EL BLOCKCHAIN")
                    let state3 = await context.getState([
                        address2
                    ])
                    const agenttemp2 = await RecordContainer.decode(state3[address2])
                    console.log(agenttemp2)
                }
            }



        }

    }
    if (!existe) {
        reject('No existe un cheque con ese id')
    }




}


async function answerProposal(context, signerPublicKey, timestamp, {record_id, receiving_agent, role, response}) {

    let proposal_address = make_proposal_address(
        record_id, receiving_agent)
    let proposal_container = getContainer(context, proposal_address, "PROPOSAL")


    let proposal = null

    try {
        for (var proposal1 of proposal_container.entries) {

            if (proposal1.status === Proposal.OPEN
                && proposal1.receiving_agent === receiving_agent
                && proposal1.role === role) {

                proposal = proposal1
            }

        }
    } catch (e) {
        reject('No existe el proposal')
    }

    if (response === AnswerProposalAction.CANCEL) {
        if (proposal.issuing_agent !== signerPublicKey) {
            reject('Only the issuing agent can cancel')
        }

        proposal.status = Proposal.CANCELED
    } else if (response === AnswerProposalAction.REJECT) {
        if (proposal.receiving_agent !== signerPublicKey) {
            reject('Only the receiving agent can reject')
        }
        proposal.status = Proposal.REJECTED
    } else if (response === AnswerProposalAction.ACCEPT) {
        if (proposal.receiving_agent !== signerPublicKey) {
            reject('Only the receiving agent can accept')
        }
        proposal.status = await accept_proposal(context, signerPublicKey, timestamp, proposal)

    }

    await setContainer(context, proposal_address, proposal_container, "PROPOSAL")


}

async function accept_proposal(context, signerPublicKey, timestamp, proposal) {

    let record = await getRecord(context, proposal.record_id)

    if (proposal.role === Proposal.OWNER) {

        if (isOwner(record.record, proposal.issuing_agent)) {

            record.record.owners.push([
                Record.AssociatedAgent.create({
                    agentId: receiving_agent,
                    timestamp: timestamp

                })
            ])

        } else {
            return Proposal.CANCELED
        }

        await setContainer(context, record.address, record.container, "RECORD")

        let recordtype = await get_record_type(context, record.record.record_type)

        for (var prop of recordtype.record_type.properties) {

            let proptemp = await get_property(context, proposal.record_id, prop.name)

            let old_owner = null

            for (var reporter of prop.reporters) {

                if (reporter.public_key === proposal.issuing_agent) {

                    old_owner = reporter
                }

            }

            old_owner.authorized = false

            let new_owner = null
            try {

                for (var reporter of prop.reporters) {

                    if (reporter.public_key === proposal.receiving_agent) {

                        new_owner = reporter
                    }

                }

                if (!new_owner.authorized) {
                    new_owner.authorized = true

                    await setContainer(context, proptemp.address, proptemp.container, "PROPERTY")

                }


            } catch (e) {


                new_owner = Property.Reporter.create({
                    public_key: receiving_agent,
                    authorized: true,
                    index: proptemp.prop.reporters.length,

                })

                proptemp.prop.reporters.push([new_owner])
                await setContainer(context, proptemp.address, proptemp.container, "PROPERTY")

            }


        }

        return Proposal.ACCEPTED
    } else if (proposal.role === Proposal.CUSTODIAN) {


        return Proposal.ACCEPTED
    } else if (proposal.role === Proposal.REPORTER) {


        return Proposal.ACCEPTED
    }


}


async function revokeReporter(context, signerPublicKey, timestamp, {record_id, reporter_id, properties}) {
    let record = await getRecord(context, record_id)
    if (isOwner(record_id, signerPublicKey)) {
        return
    }

    if (record.record.final === true) {

        reject('El cheque ya esta en estado protestado o materializado ')
    }


    let property;
    for (property of properties) {

        let tempProperty = await get_property(context, record_id, property)
        let reporter = null
        for (let reporterItem of tempProperty.prop.reporters) {

            if (reporterItem.public_key !== reporter_id) {
                reject('Ya se le quito los permisos a este usuario')
            } else {
                reporter = reporterItem
            }


        }

        reporter.authorized = false
        await setContainer(context, tempProperty.address, tempProperty.container, "PROPERTY")


    }


}

async function verifyAgent(context, publicKey) {
    let address = make_agent_address(publicKey)
    let container = await getContainer(context, address, "AGENT")

    for (agents of container.entries) {

        if (agents.public_key !== publicKey) {
            reject('No esta registrado el usuario')
        }

    }


}

async function isOwner(record, agent_id) {
    return record.owners[record.owners.length - 1].agent_id == agent_id
}

async function isCustodian(record, agent_id) {
    return record.custodians[record.custodians.length - 1].agent_id == agent_id
}

async function getRecord(context, record_id) {
    let recordAddress = make_record_address(record_id)
    let record_container = await getContainer(context, recordAddress, "RECORD")

    let record2 = null
    for (let recordItem of record_container.entries) {

        if (recordItem.record_id !== record_id) {
            reject('No existe el cheque')
        } else {
            record2 = recordItem
        }

    }
    var obj = {
        record: record2,
        container: record_container,
        address: recordAddress
    }

    return obj
}

async function get_record_type(context, type_name) {
    const type_address = make_record_type_address(type_name)

    let type_container = await getContainer(context, type_address, "RECORD_TYPE")


    let type2 = null
    let typeItem;
    for (typeItem of type_container.entries) {

        if (typeItem.name !== type_name) {
            reject('No se ha creado el modelo del cheque')
        } else {
            type2 = typeItem
        }

    }
    var obj = {
        record_type: type2,
        container: type_container,
        address: type_address
    }

    return obj
}


async function get_property(context, record_id, property_name) {
    const propertyAddress = make_property_address(record_id, property_name, 0)

    let property_container = await getContainer(context, propertyAddress, "PROPERTY")

    let prop2 = null
    for (let propItem of property_container.entries) {

        if (propItem.name !== property_name) {
            reject('La propiedad no existe')
        } else {
            prop2 = propItem
        }

    }
    var obj = {
        prop: prop2,
        container: property_container,
        address: propertyAddress
    }

    return obj
}


async function set_new_property(context, record_id, property_name, value, publickey) {
    const address = await make_property_address(record_id, property_name, 0)
    let state = await context.getState([address])
    const property_container = await PropertyContainer.decode(state[address])


    let newProperty = value

    newProperty.reporters.push(Property.Reporter.create({
            publicKey: publickey,
            authorized: true,
            index: 0
        }
    ))


    let t = true
    for (let key in state) {
        t = false


        if (state[key]) {

            let updates = {}


            let number = 0;
            for (let y in property_container.entries) {

                if (property_container.entries[y].name === property_name) {
                    property_container.entries.splice(number, 1);

                }
                number = number + 1
            }

            property_container.entries.push(newProperty)
            property_container.entries.sort((a, b) => a.name === b.name ? 0 : a.name < b.name || -1);
            console.log(property_container)
            console.log("Se anadio la property")
            //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
            let se = await PropertyContainer.encode(property_container).finish()
            updates[address] = se
            //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
            await context.setState(updates)


            let state2 = await context.getState([
                address,
            ])
            const agenttemp2 = await PropertyContainer.decode(state2[address])
            console.log(agenttemp2)


        }
    }
    if (t) {
        //ENTRA SI NO EXISTE UN CONTENEDOR DE USUARIOS EN EL BLOCKCHAIN


        let newcontainer = PropertyContainer.create({
            entries: [],
        })


        newcontainer.entries.push(newProperty)

        let updates = {}
        //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
        let se = await PropertyContainer.encode(newcontainer).finish()
        updates[address] = se
        //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
        await context.setState(updates)
    }


}


async function set_new_propertyPage(context, timestamp, record_id, property_name, value, page_number) {
    const address = make_property_address(record_id, property_name, page_number)
    let state = await context.getState([address])
    const property_container = await PropertyPageContainer.decode(state[address])

    let t = true
    for (var key in state) {
        t = false


        if (state[key]) {

            let updates = {}
            let t = property_container.entries

            let number = 0;
            for (let y in t) {

                if (t[y].name === property_name) {
                    property_container.entries.splice(number, 1);

                }
                number = number + 1
            }
            property_container.entries.push(value)
            property_container.entries.sort((a, b) => a.name === b.name ? 0 : a.name < b.name || -1);

            console.log(property_container)
            console.log("Se anadio la pagina")
            //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
            let se = await PropertyPageContainer.encode(property_container).finish()
            updates[address] = se
            //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
            await context.setState(updates)
            let state2 = await context.getState([
                address
            ])
            const agenttemp2 = await PropertyPageContainer.decode(state2[address])
            console.log(agenttemp2)


        }
    }
    if (t) {
        //ENTRA SI NO EXISTE UN CONTENEDOR DE USUARIOS EN EL BLOCKCHAIN


        let newcontainer = PropertyPageContainer.create({
            entries: [],
        })


        newcontainer.entries.push(value)

        let updates = {}
        //SE CODIFICA EL NUEVO USUARIO EN TERMINOS DEL BLOCKCHAIN
        let se = await PropertyPageContainer.encode(newcontainer).finish()
        updates[address] = se
        //SE CREA EL NUEVO USUARIO EN EL BLOCKCHAIN
        await context.setState(updates)
    }
}

async function make_new_reported_value(reporter_index, timestamp, prop, property) {

    let reported_value = null


    console.log(prop);
    switch (prop.dataType) {
        case PropertySchema.DataType.BYTES:
            reported_value = await PropertyPage.ReportedValue.create({
                reporterIndex: reporter_index,
                timestamp: timestamp,
                bytesValue: prop.bytesValue
            })
            break;
        case PropertySchema.DataType.BOOLEAN:

            reported_value = await PropertyPage.ReportedValue.create({
                reporterIndex: reporter_index,
                timestamp: timestamp,
                booleanValue: prop.booleanValue
            })

            break;
        case 3:

            reported_value = await PropertyPage.ReportedValue.create({
                reporterIndex: reporter_index,
                timestamp: timestamp,
                numberValue: prop.numberValue
            })

            break;
        case 4:

            reported_value = await PropertyPage.ReportedValue.create({
                reporterIndex: reporter_index,
                timestamp: timestamp,
                stringValue: prop.stringValue
            })

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

    if (entries) {
        console.log("entries")

        let newcontainer = await container.decode(entries[address])

        return newcontainer

    }


    return container


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
