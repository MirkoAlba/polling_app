import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  # ---------- Error Types ----------
  type TokenError {
    message: String!
    verified: Boolean!
  }

  # ---------- Scalar Types ----------
  scalar BigInt

  # ---------- Types ----------
  type User {
    id: ID!
    firstName: String!
    lastname: String!
    cellNumber: BigInt!
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

    createdAt: String

    # relation User
    user: User!
    userId: ID!
  }

  # ---------- Inputs ----------

  input RegisterInput {
    firstName: String!
    lastName: String!
    cellNumber: BigInt!
    email: String!
    password: String!
    confirmPassword: String!
  }

  # ---------- Operations ----------

  type Query {
    # User
    Me: Boolean!
    VerifyToken(token: String!): TokenError!
  }

  type Mutation {
    # User
    Register(registerInput: RegisterInput!): String!
    Login(email: String!, password: String!): String!
    Logout: Boolean!
  }
`;
