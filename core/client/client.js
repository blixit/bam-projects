import React from 'react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://bam-projects.herokuapp.com/v1/graphql'
  })
});

export const withApollo = Component => () => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
);

export default client;
