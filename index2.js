import { ApolloServer } from 'apollo-server';
import practiceAPI from './datasources/api_practice.js';
import { typedefs2 } from './typedefs2.js';
import { resolvers2 } from './resolvers2.js';

const server = new ApolloServer({
  typeDefs: typedefs2,
  resolvers: resolvers2,
  dataSources: () => ({
    apiPractice: new practiceAPI(),
  }),
});

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
