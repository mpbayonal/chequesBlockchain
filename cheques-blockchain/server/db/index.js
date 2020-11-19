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

const r = require('rethinkdb')
const _ = require('lodash')
const jsSchema = require('js-schema')
const config = require('../system/config')

const HOST = config.DB_HOST
const PORT = config.DB_PORT
const NAME = config.DB_NAME
const RETRY_WAIT = config.RETRY_WAIT
const AWAIT_TABLE = 'blocks'

// Connection to db for query methods, run connect before querying
let connection = null

const promisedTimeout = (fn, wait) => {
  return new Promise(resolve => setTimeout(resolve, wait)).then(fn);
}

const awaitDatabase = () => {
  return r.tableList().run(connection)
    .then(tableNames => {
      if (!tableNames.includes(AWAIT_TABLE)) {
        throw new Error()
      }
      console.log('Successfully connected to database:', NAME)
    })
    .catch(() => {

        r.connect({
          host: process.env.RETHINK_HOST,
          port: process.env.RETHINK_PORT,
          password: process.env.RETHINK_PASSWORD,
          user: process.env.RETHINK_USER
        })
            .then(conn => {
                console.log(`Creating "${NAME}" database...`)
                r.dbList().contains(NAME).run(conn)
                    .then(dbExists => {
                        if (dbExists) throw new Error(`"${NAME}" already exists`)
                        return r.dbCreate(NAME).run(conn)
                    })
                    .then(() => {
                        console.log('Creating "users" table...')
                        return r.db(NAME).tableCreate('users', {
                            primaryKey: 'publicKey'
                        }).run(conn)
                    })
                    .then(() => {
                        // The usernames table is used to quickly ensure unique usernames
                        console.log('Creating "usernames" table...')
                        return r.db(NAME).tableCreate('usernames', {
                            primaryKey: 'username'
                        }).run(conn)
                    })
                    .then(() => {
                        console.log('Creating "agents" table...')
                        return r.db(NAME).tableCreate('agents').run(conn)
                    })
                    .then(() => {
                        return r.db(NAME).table('agents').indexCreate('publicKey').run(conn)
                    })
                    .then(() => {
                        console.log('Creating "records" table...')
                        return r.db(NAME).tableCreate('records').run(conn)
                    })
                    .then(() => {
                        r.db(NAME).table('records').indexCreate('recordId').run(conn)
                    })
                    .then(() => {
                        console.log('Creating "recordTypes" table...')
                        return r.db(NAME).tableCreate('recordTypes').run(conn)
                    })
                    .then(() => {
                        return r.db(NAME).table('recordTypes').indexCreate('name').run(conn)
                    })
                    .then(() => {
                        console.log('Creating "properties" table...')
                        return r.db(NAME).tableCreate('properties').run(conn)
                    })
                    .then(() => {
                        return r.db(NAME).table('properties').indexCreate('attributes', [
                            r.row('name'),
                            r.row('recordId')
                        ]).run(conn)
                    })
                    .then(() => {
                        console.log('Creating "propertyPages" table...')
                        return r.db(NAME).tableCreate('propertyPages').run(conn)
                    })
                    .then(() => {
                        return r.db(NAME).table('propertyPages').indexCreate('attributes', [
                            r.row('name'),
                            r.row('recordId'),
                            r.row('pageNum')
                        ]).run(conn)
                    })
                    .then(() => {
                        console.log('Creating "proposals" table...')
                        return r.db(NAME).tableCreate('proposals').run(conn)
                    })
                    .then(() => {
                        return r.db(NAME).table('proposals').indexCreate('attributes', [
                            r.row('recordId'),
                            r.row('timestamp'),
                            r.row('receivingAgent'),
                            r.row('role')
                        ]).run(conn)
                    })
                    .then(() => {
                        console.log('Creating "blocks" table...')
                        return r.db(NAME).tableCreate('blocks', {
                            primaryKey: 'blockNum'
                        }).run(conn)
                    })
                    .then(() => {
                        console.log('Bootstrapping complete, closing connection.')
                        return conn.close()
                    })
                    .catch(err => {
                        console.log(`Unable to bootstrap "${NAME}" db: ${err.message}`)
                        return conn.close()
                    })
            })
            .catch(err => {
                console.log(`Unable to connect to db at ${HOST}:${PORT}}: ${err.message}`)
            })

        console.warn('Database not initialized:', NAME)
      console.warn(`Retrying database in ${RETRY_WAIT / 1000} seconds...`)
      return promisedTimeout(awaitDatabase, RETRY_WAIT)
    })
}

const connect = () => {
  return r.connect({
    host: process.env.RETHINK_HOST,
    port: process.env.RETHINK_PORT,
    db: NAME,
    password: process.env.RETHINK_PASSWORD,
    user: process.env.RETHINK_USER
  })
    .then(conn => {
      connection = conn
      return awaitDatabase()
    })
    .catch(err => {



      if (err instanceof r.Error.ReqlDriverError) {
        console.warn('Unable to connect to RethinkDB')
        console.warn(`Retrying in ${RETRY_WAIT / 1000} seconds...`)
        return promisedTimeout(connect, RETRY_WAIT)
      }
      throw err
    })
}

const runQuery = query => {
  return query
    .run(connection)
    .catch(err => {
      console.error(err.message)
      throw new Error(err.message)
    })
}

const queryWithCurrentBlock = query => {
  return runQuery(
    r.table('blocks')
      .orderBy(r.desc('blockNum'))
      .nth(0)('blockNum')
      .do(query)
  )
}

// Runs a specified query against a database table
const queryTable = (table, query, removeCursor = true) => {
  return query(r.table(table))
    .run(connection)
    .then(cursor => removeCursor ? cursor.toArray() : cursor)
    .catch(err => {
      console.error(`Unable to query "${table}" table!`)
      console.error(err.message)
      throw new Error(err.message)
    })
}

// Use for queries that modify a table, turns error messages into errors
const modifyTable = (table, query) => {
  return queryTable(table, query, false)
    .then(results => {
      if (!results) {
        throw new Error(`Unknown error while attempting to modify "${table}"`)
      }
      if (results.errors > 0) {
        throw new Error(results.first_error)
      }
      return results
    })
}

// Inserts a document into a table, throwing an error on failure
// Accepts an optional validator function, which should have an errors method
const insertTable = (table, doc) => {
  return modifyTable(table, t => t.insert(doc))
    .then(results => {
      if (results.inserted === 0) {
        throw new Error(`Unknown Error: Unable to insert to ${table}`)
      }
      return results
    })
}

const updateTable = (table, primary, changes) => {
  return modifyTable(table, t => {
    return t.get(primary).update(changes, {returnChanges: true})
  })
    .then(results => {
      if (results.replaced === 0 && results.unchanged === 0) {
        throw new Error(`Unknown Error: Unable to update ${primary}`)
      }
      return results
    })
}

// Validates a db input based on a schema as promised
const validate = (input, schema) => {
  return Promise.resolve()
    .then(() => {
      const validator = jsSchema(schema)
      if (validator(input)) return input

      const errors = validator.errors(input)
      if (!errors) throw new Error('Invalid Input: one or more keys forbidden')

      const [ key, message ] = _.entries(errors)[0]
      throw new Error(`Invalid Input: "${key}" - ${message}`)
    })
}

module.exports = {
  connect,
  runQuery,
  queryWithCurrentBlock,
  queryTable,
  modifyTable,
  insertTable,
  updateTable,
  validate
}
