import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  # ---------- Error Types ----------
  type TokenResponse {
    message: String!
    verified: Boolean!
    userId: ID!
  }

  # ---------- Scalar Types ----------
  scalar BigInt
  scalar Date

  # ---------- User Types ----------
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    cellNumber: BigInt!
    # relation Profile
    profile: Profile! #campo deve essere uguale a quello nei top-level resolver
    profileId: ID!
  }

  type Profile {
    id: ID!
    email: String!
    password: String!
    confirmPassword: String!
    isAdmin: Boolean!

    createdAt: Date!

    # relation User
    user: User! #campo deve essere uguale a quello nei top-level resolver
    userId: ID!
  }

  # ---------- Products Types ----------
  type Category {
    id: ID!
    categoryName: String!
    categoryPathImage: String!
    products: [Product!]! #field level resolver
  }

  type Product {
    id: ID!
    productName: String!
    productDescription: String!
    productCost: Float!
    productImagePath: String!
    # category relationship
    category: Category! #field level resolver
    categoryId: ID!
  }

  # ---------- Inputs ----------

  input RegisterInput {
    firstName: String!
    lastName: String!
    cellNumber: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  # ---------- Operations ----------

  type Query {
    # User
    Me(id: String!): User!
    VerifyToken(token: String!): TokenResponse!

    # Products Categories
    GetAllCategories: [Category]!
    GetCategory(categoryName: String!): String!
    GetAllProducts: [Product]!
    GetProductsByCategory(categoryName: String!): [Product]
  }

  type Mutation {
    # User
    Register(registerInput: RegisterInput!): String!
    Login(email: String!, password: String!): String!
    Logout: Boolean!
  }
`;
