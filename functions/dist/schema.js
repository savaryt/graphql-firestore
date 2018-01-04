"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// GraphQL
var graphql_1 = require("graphql");
// Resolvers
var items_1 = require("./resolvers/items");
// Item
var itemType = new graphql_1.GraphQLObjectType({
    name: 'Article',
    fields: function () { return ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        title: { type: graphql_1.GraphQLString },
        content: { type: graphql_1.GraphQLString, },
        // timestamp > Int32
        createdAt: { type: graphql_1.GraphQLFloat },
    }); }
});
// Root query
var query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        items: {
            type: new graphql_1.GraphQLList(itemType),
            resolve: items_1.itemsResolver
        },
    }
});
exports.schema = new graphql_1.GraphQLSchema({ query: query });
