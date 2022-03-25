const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = `
  type PayRate {
    value: Int
  }
  type PayRange {
    range: [Int]
  }
  union Pay = PayRate | PayRange
  type Location {
    city: String
    state: String
  }
  type Guide {
    location: Location
    type: String
    description: String
    payRate: Pay
    schedule: [String]
  }
  type Query {
    search(types: [String], maxPayRate: Int): [Guide]
  }
`;

const resolvers = {
  Pay: {
    __resolveType(obj, context, info) {
      if (obj.range) {
        return "PayRange";
      }
      if (obj.value) {
        return "PayRate"
      }
      return null;
    }
  }
}

module.exports = makeExecutableSchema({ typeDefs, resolvers });