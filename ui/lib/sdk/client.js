import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client'

function getApolloClient () {
  return new ApolloClient({
    uri: process.env.GRAPHQL_API_URI,
    cache: new InMemoryCache()
  })
}

export default getApolloClient
