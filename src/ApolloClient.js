import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3002/api/', // Your GraphQL endpoint
  cache: new InMemoryCache(),
});

export { client, ApolloProvider };
