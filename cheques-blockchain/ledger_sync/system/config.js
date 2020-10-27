/**
 * Copyright 2018 Intel Corporation
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
require('dotenv').config()

const loadConfig = (defaultValue = {}) => {
  try {
    return require('../config.json')
  } catch (err) {
    // Throw error on bad JSON, otherwise ignore
    if (err instanceof SyntaxError) throw err
    return {}
  }
}

const config = loadConfig()

const initConfigValue = (key, defaultValue = null) => {
  config[key] = process.env[key] || config[key] || defaultValue
}

// Setup non-sensitive config variable with sensible defaults,
// if not set in environment variables or config.json
initConfigValue('RETRY_WAIT', process.env.RETRY_WAIT)
initConfigValue('VALIDATOR_URL', process.env.VALIDATOR_URL)
initConfigValue('DB_HOST', process.env.DB_HOST)
initConfigValue('DB_PORT', process.env.DB_PORT)
initConfigValue('DB_NAME', process.env.DB_NAME)


module.exports = config
