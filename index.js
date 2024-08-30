import { ApolloServer } from 'apollo-server';
import typeDefs from './typedefs.js';
import resolvers from './resolvers.js';
import { useServer } from 'graphql-ws/lib/use/ws';
import { WebSocketServer } from 'ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
});

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);

  const wsServer = new WebSocketServer({
    server: server.httpServer,
    path: '/graphql',
  });

  useServer({ schema }, wsServer);

  console.log(`Subscriptions ready at ws://localhost:8000/graphql`);
});
