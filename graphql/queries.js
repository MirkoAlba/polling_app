import { gql } from "@apollo/client";

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
