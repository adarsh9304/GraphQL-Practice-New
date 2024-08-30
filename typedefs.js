import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Message {
    id: ID!
    content: String!
    user: User!
  }

  type Query {
    users: [User!]!
    messages: [Message!]!
  }

  type Mutation {
    sendMessage(userId: ID!, content: String!): Message!
  }

  type Subscription {
    messageSent: Message!
  }
`;

export default typeDefs;
