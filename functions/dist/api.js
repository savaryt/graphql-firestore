"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var functions = require("firebase-functions");
// Express & Middleware
var express = require("express");
exports.app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var graphQLHTTP = require("express-graphql");
var schema_1 = require("./schema");
// API
//  bodyParser.urlencoded({ extended: true }),
exports.app.use(cors({ origin: true }));
exports.app.use('/graphiql', graphQLHTTP({ schema: schema_1.schema, graphiql: true }));
exports.app.use('/graphql', bodyParser.json(), graphQLHTTP({ schema: schema_1.schema, graphiql: false }));
exports.api = functions.https.onRequest(function (req, res) {
    if (!req.path) {
        // prepend in case of query params
        req.url = "/" + req.url;
    }
    return exports.app(req, res);
});
