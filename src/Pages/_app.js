import App from 'next/app'
import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <title>Notes</title>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}