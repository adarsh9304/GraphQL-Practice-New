import { gql } from 'apollo-server';

export const typedefs2 = gql`
  type Post {
    id: ID!
    title: String
    body: String
    user: User
  }

  type User {
    id: ID!
    name: String
    username: String
    email: String
    posts: [Post]
  }

  type Query {
    post(id: ID!): Post
    posts: [Post]
    user(id: ID!): User
    users: [User]
  }
`;
