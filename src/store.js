import { createStore, persist, action, thunk } from "easy-peasy";

import { queryClient } from "../helpers/query-client";
import { GET_CURRENT_USER_CART } from "../graphql/queries";

export const store = createStore(
  persist({
    cart: {
      userId: "",
      orderItems: [],

      addProductToCart: action((state, payload) => {
        state.orderItems.push({
          quantity: 1,
          productCost: payload.productCost,
          product: {
            id: payload.id,
            productName: payload.productName,
          },
        });
      }),

      removeProduct: action((state, payload) => {
        state.orderItems = state.orderItems.filter((orderItem) => {
          return orderItem.product.id !== payload;
        });
      }),
    },

    fetchProducts: thunk(async (actions) => {
      const { data } = await queryClient({ query: GET_CURRENT_USER_CART });
      actions.setProducts(data?.GetCurrentUserCart);
    }),

    setUserId: action((state, payload) => {
      state.cart.userId = payload;
    }),

    setProducts: action((state, payload) => {
      state.cart.orderItems = payload.orderItems;
    }),
  })
);
