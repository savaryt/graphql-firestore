"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase
var firebase_admin_1 = require("firebase-admin");
exports.itemsResolver = function (root, args) { return firebase_admin_1.firestore()
    .collection('items')
    .get()
    .then(function (querySnapshot) {
    var items = [];
    querySnapshot.forEach(function (document) {
        items.push(__assign({ id: document.id }, document.data()));
    });
    return items;
}); };
