// Firebase
import * as functions from 'firebase-functions'

// Standard
import * as fs from 'fs'
import * as path from 'path'
import * as https from 'https'

// Express & Middleware
import * as express from 'express'
export const app = express()
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import * as graphQLHTTP from 'express-graphql'
import { schema } from './schema'

// API
//  bodyParser.urlencoded({ extended: true }),
app.use(cors({ origin: true }))
app.use('/graphiql', graphQLHTTP({ schema, graphiql: true }))
app.use('/graphql', bodyParser.json(), graphQLHTTP({ schema, graphiql: false }))

export const api = functions.https.onRequest((req, res) => {
  if (!req.path) {
    // prepend in case of query params
    req.url = `/${req.url}`
  }
  return app(req, res)
})

