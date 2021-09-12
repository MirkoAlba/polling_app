import { createStore, persist, action, thunk, debug } from "easy-peasy";

import { queryClient } from "../helpers/query-client";
import { GET_CURRENT_USER_CART } from "../graphql/queries";

export const store = createStore(
  persist({
    cart: {
      userId: "",
      cartItems: [],

      //add 1 product payload = product object
      addProductToCart: action((state, payload) => {
        state.cartItems.push({
          quantity: 1,
          productCost: payload.productCost,
          productId: payload.id,
        });
      }),
      //remove 1 product payload = id
      removeProduct: action((state, payload) => {
        state.cartItems = state.cartItems.filter((cartItem) => {
          return cartItem.productId !== payload;
        });
      }),

      //add quantity payload = id
      addQuantity: action((state, payload) => {
        const product = state.cartItems.find(
          (item) => item.productId === payload
        );
        product.quantity += 1;
      }),
      //remove quantity payload = id
      removeQuantity: action((state, payload) => {
        const product = state.cartItems.find(
          (item) => item.productId === payload
        );
        product.quantity === 1
          ? (product.quantity = 1)
          : (product.quantity -= 1);
      }),
    },

    // thunks
    fetchCartItems: thunk(async (actions) => {
      const { data } = await queryClient({ query: GET_CURRENT_USER_CART });
      const a = data?.GetCurrentUserCart?.cartItems.map((item) => {
        return {
          quantity: item.quantity,
          productCost: item.productCost,
          productId: item.product.id,
        };
      });
      actions.setCartItems(a);
    }),

    setUserId: action((state, payload) => {
      state.cart.userId = payload;
    }),

    setCartItems: action((state, payload) => {
      state.cart.cartItems = payload ? payload : [];
    }),
  })
);
