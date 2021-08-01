import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  # ---------- Types ----------

  type User {
    id: ID!
    firstName: String!
    lastname: String!
    cellNumber: Int!

    # relation Profile
    profile: Profile!
    profileId: ID!
  }

  type Profile {
    id: ID!
    email: String!
    password: String!
    confirmPassword: String!
    isAdmin: Boolean!

    # relation User
    user: User!
    userId: ID!
  }

  # ---------- Inputs ----------

  input RegisterInput {
    firstName: String!
    lastName: String!
    cellNumber: Int!
    email: String!
    password: String!
    confirmPassword: String!
  }

  # ---------- Operations ----------

  type Query {
    # User
    Me: Boolean!
  }

  type Mutation {
    # User
    Register(registerInput: RegisterInput!): String!
    Login(email: String!, password: String!): String!
    Logout: Boolean!
  }
`;

// mutation Register($registerInput: RegisterInput!) {
//   Register(registerInput: $registerInput)
// }
