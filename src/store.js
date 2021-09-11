import { createStore, persist, action, thunk } from "easy-peasy";

import { queryClient } from "../helpers/query-client";
import { GET_CURRENT_USER_CART } from "../graphql/queries";

export const store = createStore({
  cart: {
    userId: "",
    cartItems: [],

    addProductToCart: action((state, payload) => {
      state.cartItems.push({
        quantity: 1,
        productCost: payload.productCost,
        productId: payload.id,
      });
    }),

    removeProduct: action((state, payload) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        return cartItem.productId !== payload;
      });
    }),
  },

  // thunks
  fetchProducts: thunk(async (actions) => {
    const { data } = await queryClient({ query: GET_CURRENT_USER_CART });
    const a = data?.GetCurrentUserCart?.cartItems.map((item) => {
      return {
        quantity: item.quantity,
        productCost: item.productCost,
        productId: item.product.id,
      };
    });
    actions.setProducts(a);
  }),

  setUserId: action((state, payload) => {
    state.cart.userId = payload;
  }),

  setProducts: action((state, payload) => {
    state.cart.cartItems = payload ? payload : [];
  }),
});
