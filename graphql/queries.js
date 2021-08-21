import { gql } from "@apollo/client";

export const ME = gql`
  query Me($id: String!) {
    Me(id: $id) {
      id
      firstName
      lastName
      cellNumber

      profile {
        id
        createdAt
        email
        password
        isAdmin
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categoryName: String!) {
    GetProductsByCategory(categoryName: $categoryName) {
      id
      productName
      productCost
      productDescription
      productImagePath

      category {
        categoryName
      }
    }
  }
`;
