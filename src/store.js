import { createStore, persist, action, thunk } from "easy-peasy";

import { queryClient } from "../helpers/query-client";
import { GET_ALL_PRODUCTS } from "../graphql/queries";

export const store = createStore(
  persist({
    products: [],
    fetchProducts: thunk(async (actions) => {
      const data = await queryClient({
        query: GET_ALL_PRODUCTS,
      });
      actions.setProducts(data?.data?.GetAllProducts);
    }),
    setProducts: action((state, payload) => {
      state.products = payload;
    }),
  })
);
