import { ApolloProvider } from '@apollo/client'
import { getApolloClient } from 'graphql/client'
import type { AppProps } from 'next/app'
import './_app.scss'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = getApolloClient()

  return (
    <ApolloProvider client={apolloClient} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
