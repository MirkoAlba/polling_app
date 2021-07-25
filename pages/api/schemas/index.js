import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: String!
    name: String
    age: Int
  }

  type Query {
    getUser: User!
  }
`;
