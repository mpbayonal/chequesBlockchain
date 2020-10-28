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

import * as m from "mithril";
import * as _ from "lodash";
import * as sjcl from "sjcl";


const API_PATH = 'http://localhost:8020/'
const STORAGE_KEY = 'asset_track.authorization'
let authToken = null

/**
 * Generates a base-64 encoded SHA-256 hash of a plain text password
 * for submission to authorization routes
 */
export const hashPassword = password => {
  const bits = sjcl.hash.sha256.hash(password)
  return sjcl.codec.base64.fromBits(bits)
}

/**
 * Getters and setters to handle the auth token both in memory and storage
 */
export const getAuth = () => {
  if (!authToken) {
    authToken = window.localStorage.getItem(STORAGE_KEY)
  }
  return authToken
}

export const setAuth = token => {
  window.localStorage.setItem(STORAGE_KEY, token)
  authToken = token
  return authToken
}

export const clearAuth = () => {
  const token = getAuth()
  window.localStorage.clear(STORAGE_KEY)
  authToken = null
  return token
}

/**
 * Parses the authToken to return the logged in user's public key
 */
export const getPublicKey = () => {
  const token = getAuth()
  if (!token) return null
  return window.atob(token.split('.')[1])
}

// Adds Authorization header and prepends API path to url
export const baseRequest = opts => {
  const Authorization = getAuth()
  const authHeader = Authorization ? { Authorization } : {}
  opts.headers = _.assign(opts.headers, authHeader)
  return m.request(opts)
}

/**
 * Submits a request to an api endpoint with an auth header if present
 */
export const request = (method, endpoint, data) => {
  return baseRequest({
    method,
    url: endpoint,
    data
  })
}

/**
 * Method specific versions of request
 */
export const get = _.partial(request, 'GET')
export const post = _.partial(request, 'POST')
export const patch = _.partial(request, 'PATCH')

/**
 * Method for posting a binary file to the API
 */
export const postBinary = (endpoint, data) => {
  return baseRequest({
    method: 'POST',
    url: endpoint,
    headers: { 'Content-Type': 'application/octet-stream' },
    // prevent Mithril from trying to JSON stringify the body
    serialize: x => x,
    data
  })
}

