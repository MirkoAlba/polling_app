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
