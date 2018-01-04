// GraphQL
import {
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql'
import * as GraphQLDate from 'graphql-date'

// Resolvers
import { itemsResolver } from './resolvers/items'

// Item
const itemType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    content: { type: GraphQLString, },
    // timestamp > Int32
    createdAt: { type: GraphQLFloat },
  })
})

// Root query
const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    items: {
      type: new GraphQLList(itemType),
      resolve: itemsResolver
    },
  }
})

export const schema = new GraphQLSchema({ query })