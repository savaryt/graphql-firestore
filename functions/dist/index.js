"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebase_functions_1 = require("firebase-functions");
var firebase_admin_1 = require("firebase-admin");
firebase_admin_1.initializeApp(firebase_functions_1.config().firebase);
// API
var api_1 = require("./api");
exports.api = api_1.api;
