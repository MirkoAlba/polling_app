import { createStore, persist, action, thunk } from "easy-peasy";

import { queryClient } from "../helpers/query-client";
import { GET_ALL_PRODUCTS } from "../graphql/queries";

export const store = createStore(
  persist({
    products: [],
    cart: {
      userId: "",
      productsInCart: [],

      addProductToCart: action((state, payload) => {
        state.productsInCart.push(payload);
        // state.productsInCart.map(product => {
        //   if(product.id !== payload.id) {
        //     state.productsInCart.push(payload);
        //   } else {
        //     product.quantity =
        //   }
        // })
      }),
      // removeProduct: action((state, payload) => {
      //   state.productsInCart.push(payload);
      // }),
    },

    fetchProducts: thunk(async (actions) => {
      const data = await queryClient({ query: GET_ALL_PRODUCTS });
      actions.setProducts(data?.data?.GetAllProducts);
    }),

    setUserId: action((state, payload) => {
      state.cart.userId = payload;
    }),

    setProducts: action((state, payload) => {
      state.products = payload;
    }),
  })
);
