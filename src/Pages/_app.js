import App from 'next/app'
import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import TokenContext from '../Components/Context/Token'
import ShowContext from '../Components/Context/Show'
import Show from '../Components/Context/Show';

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <title>Notes</title>
        <TokenContext>
          <ShowContext>
            <Component {...pageProps} />
          </ShowContext>
        </TokenContext>
      </ApolloProvider>
    )
  }
}