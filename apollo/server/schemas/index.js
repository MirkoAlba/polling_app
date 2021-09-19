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
    points: Float!

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
    createdAt: Date!
    state: String!
    delivery: String!

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
    # cartItems
    cartItems: [CartItem]
  }

  type CartItem {
    id: ID!
    quantity: Int!
    productCost: Float!
    # product relationship
    product: Product
    productId: ID!
    # cart relationship
    cart: Cart
    cartId: ID!
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
    total: Float!
    via: String!
    numeroCivico: Int!
    citta: String!
    provincia: String!
    cap: Int!
    orderItems: [OrderItemInput]!
  }

  input OrderItemInput {
    quantity: Int!
    productCost: Float!
    productId: ID!
  }

  input CreateCartInput {
    cartItems: [CartItemInput]!
  }

  input CartItemInput {
    quantity: Int!
    productCost: Float!
    productId: ID!
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

    # Order
    GetAllCurrentUserOrders: [Order]

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
    UpsertCart(createCartInput: CreateCartInput): Cart!
  }
`;
