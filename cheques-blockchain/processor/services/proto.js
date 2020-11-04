
const fs = require('fs')
const path = require('path')
const protobuf = require('protobufjs')

// A new empty protobuf root instance.
let root = new protobuf.Root()

// Retrieve every protobuf file.
const files = fs
  .readdirSync(path.resolve(__dirname, '../protos'))
  .map(f => path.resolve(__dirname, '../protos', f))
  .filter(f => f.endsWith('.proto'))

// Load synchronously each protobuf file.
root = root.loadSync(files)

// Payload lookup.
const SCPayload = root.lookup('SCPayload')
const SCPayloadActions = root.lookup('Action').values
const SCPayloadFields = root.lookup('Action').parent.fields

// Users lookup.

const Record = root.lookup('Record')
const RecordContainer = root.lookup('RecordContainer')
const RecordType = root.lookup('RecordType')
const RecordTypeContainer = root.lookup('RecordTypeContainer')

const ProposalContainer = root.lookup('ProposalContainer')
const Proposal = root.lookup('Proposal')

const PropertyPageContainer = root.lookup('PropertyPageContainer')
const PropertyPage = root.lookup('PropertyPage')
const PropertyValue = root.lookup('PropertyValue')
const PropertySchema = root.lookup('PropertySchema')
const PropertyContainer = root.lookup('PropertyContainer')
const Property = root.lookup('Property')

const AgentContainer = root.lookup('AgentContainer')
const Agent = root.lookup('Agent')

const CreateAgentAction = root.lookup('CreateAgentAction')
const CreateRecordAction = root.lookup('CreateRecordAction')
const FinalizeRecordAction = root.lookup('FinalizeRecordAction')
const CreateRecordTypeAction = root.lookup('CreateRecordTypeAction')
const UpdatePropertiesAction = root.lookup('UpdatePropertiesAction')
const CreateProposalAction = root.lookup('CreateProposalAction')
const AnswerProposalAction = root.lookup('AnswerProposalAction')
const RevokeReporterAction = root.lookup('RevokeReporterAction')

module.exports = {
  root,
  SCPayload,
  SCPayloadActions,
  SCPayloadFields,
  RecordTypeContainer,
  RecordType,
  Proposal,
  RecordContainer,
  Record,
  ProposalContainer,
  PropertyPageContainer,
  PropertyPage,
  PropertyValue,
  PropertySchema,
  PropertyContainer,
  Property,
  AgentContainer,
  Agent,
  CreateAgentAction,
  CreateRecordAction,
  FinalizeRecordAction,
  CreateRecordTypeAction,
  UpdatePropertiesAction,
  CreateProposalAction,
  AnswerProposalAction,
  RevokeReporterAction,
}
