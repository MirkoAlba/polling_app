import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation register($registerInput: RegisterInput!) {
    Register(registerInput: $registerInput)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($userEmail: String!, $userPassword: String!) {
    Login(email: $userEmail, password: $userPassword)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    Logout
  }
`;

export const UPSERT_CART = gql`
  mutation UpsertCart($createCartInput: CreateCartInput!) {
    UpsertCart(createCartInput: $createCartInput) {
      id

      profile {
        id
        email
      }

      cartItems {
        id
        quantity
        productId
        productCost
      }
    }
  }
`;
