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

    # cart
    cart: Cart
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

  # ---------- Order Types ----------
  type Order {
    id: ID!
    total: Float!
    createdAt: String!
    state: String!

    #profile relation
    profile: Profile!
    profileId: ID!

    # OrderItem relationship
    orderItems: [OrderItem]!
  }

  type OrderItem {
    id: ID!
    quantity: Int!
    productCost: Float!

    # product relationship
    product: Product
    productId: ID!

    # order relationship
    order: Order
    orderId: ID

    # cart
    cart: Cart
  }

  # ---------- Cart Types ----------
  type Cart {
    id: ID!

    # profile ref
    profile: Profile

    # orderItems
    orderItems: [OrderItem]
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

  input CreateOrderInput {
    userId: ID!
    total: Float!
    orderItems: [OrderItemInput]!
  }

  input OrderItemInput {
    quantity: Int!
    productCost: Float!
    productId: ID!
  }

  input CreateCartInput {
    orderItems: [OrderItemInput]
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
    GetProductById(id: ID!): Product!

    # Cart
    GetCurrentUserCart: Cart
  }

  type Mutation {
    # User
    Register(registerInput: RegisterInput!): String!
    Login(email: String!, password: String!): String!
    Logout: Boolean!

    # Order
    CreateOrder(createOrderInput: CreateOrderInput!): Order

    # Cart
    CreateCart(createCartInput: CreateCartInput): Cart!
    UpdateCart(orderItems: [OrderItemInput!]!): Cart!
  }
`;
