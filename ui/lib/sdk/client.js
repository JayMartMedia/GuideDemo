import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'

function getApolloClient () {
  return new ApolloClient({
    // TODO: do this properly
    uri: process.env.HOSTED_GRAPHQL_API_URI || process.env.GRAPHQL_API_URI,
    cache: new InMemoryCache()
  })
}

export default getApolloClient
