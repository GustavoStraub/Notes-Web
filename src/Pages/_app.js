import App from 'next/app'
import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import TokenContext from '../Components/Context/Token'
import ShowContext from '../Components/Context/Show'
import NewShowContext from '../Components/Context/NewShowContext'

const client = new ApolloClient({
  uri: 'https://notes-application-backend.herokuapp.com/',
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <title>Notes</title>
        <TokenContext>
          <ShowContext>
            <NewShowContext>
              <Component {...pageProps} />
            </NewShowContext>
          </ShowContext>
        </TokenContext>
      </ApolloProvider>
    )
  }
}