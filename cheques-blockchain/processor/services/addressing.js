
const { createHash } = require('crypto')

/**
 * Return the SHA-512 hex string calculated from an input string sliced from 0 to len characters.
 * @param {String} input Input string where hash is calculated.
 * @param {Number} len The length of the output hash string.
 */
const hashAndSlice = (input, len) => {
  return createHash('sha512')
    .update(input)
    .digest('hex')
    .slice(0, len)
}

// SawChain Family metadata.
const FAMILY_NAME = 'supply_chain'
const NAMESPACE = hashAndSlice(FAMILY_NAME, 6)
const VERSION = '1.1'

// Addressing state object prefixes.
const PREFIXES = {
  AGENT: 'ae',
  PROPERTY: 'ea',
  PROPOSAL: 'aa',
  RECORD: 'ec',
  RECORD_TYPE: 'ee',
}

/**
 * This object contains a string for the concatenation of each namespace with the related prefix.
 */
const FULL_PREFIXES = Object.keys(PREFIXES).reduce((prefixes, key) => {
  prefixes[key] = NAMESPACE + PREFIXES[key]
  return prefixes
}, {})

/**
 * Return a state full-address from a user prefix.
 * @param {String} prefix A prefix from pre-defined user prefixes list.
 * @param {String} publicKey The user public key.
 */
const make_agent_address = ( publicKey) =>
  FULL_PREFIXES.AGENT +  hashAndSlice(publicKey, 62)

const make_record_address = ( record_id) =>
    FULL_PREFIXES.RECORD +  hashAndSlice(record_id, 62)

const make_record_type_address = ( type_name) =>
    FULL_PREFIXES.RECORD_TYPE +  hashAndSlice(type_name, 62)

const make_property_address = ( record_id, property_name,  page) =>
    make_property_address_range( record_id) +  hashAndSlice(property_name, 22) + num_to_page_number(page)

const make_property_address_range = ( record_id) =>
    FULL_PREFIXES.PROPERTY +  hashAndSlice(record_id, 36)

const make_proposal_address = ( record_id, agent_id) =>
    FULL_PREFIXES.PROPOSAL +  hashAndSlice(record_id, 36) +  hashAndSlice(agent_id, 26)

const num_to_page_number = ( page) =>{
  let hexStr = page.toString(16);
  return hexStr.padStart(4, '0');
}


/**
 * Return true or false depending on whether or not the given state address is a valid address.
 * It should reject an address if it's not a string or not 70 hex characters, and if it doesn't start with SawChain
 * namespace.
 * @param {String} address The state address to be validated.
 */
const isValidAddress = address => {
  const regExp = `^${NAMESPACE}[0-9A-Fa-f]{64}$`

  return RegExp(regExp).test(address)
}

module.exports = {
  NAMESPACE,
  FAMILY_NAME,
  VERSION,
  PREFIXES,
  FULL_PREFIXES,
  make_agent_address,
  make_property_address,
  make_property_address_range,
  make_record_type_address,
  make_record_address,
  make_proposal_address,
  isValidAddress,
  hashAndSlice,
}
