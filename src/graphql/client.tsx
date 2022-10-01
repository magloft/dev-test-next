import { ApolloClient, ApolloLink, createHttpLink, FetchResult, InMemoryCache, NextLink, NormalizedCacheObject, Operation } from '@apollo/client'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const logging = new ApolloLink((operation: Operation, forward: NextLink) => {
  return forward(operation).map((result: FetchResult) => {
    console.log(operation.operationName, operation.variables)
    return result
  })
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([logging, createHttpLink({ uri: 'https://tmdb.apps.quintero.io/', fetch })]),
  cache: new InMemoryCache()
})

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  return apolloClient
}
