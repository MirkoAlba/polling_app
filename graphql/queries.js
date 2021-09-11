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

// ritorno solo id cosi fetcho il prodotto nello store per sicurezza
// lo store state è modificabile nel sessionStorage e non posso prendere i valori direttamente li
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    GetAllProducts {
      id
      # productName
      # productCost
      # productDescription
      # category {
      #   id
      #   categoryName
      # }
      # productImagePath
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

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    GetProductById(id: $id) {
      id
      productName
      productCost
    }
  }
`;

export const GET_CURRENT_USER_CART = gql`
  query GetCurrentUserCart {
    GetCurrentUserCart {
      id
      # profile {
      #   id
      #   email

      #   user {
      #     firstName
      #     lastName
      #   }
      # }

      cartItems {
        quantity
        productCost

        product {
          id
          productName
        }
      }
    }
  }
`;
