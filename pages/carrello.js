import { useEffect } from "react";

import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

import { useStoreState, useStoreActions } from "easy-peasy";

import CartComponent from "../components/cart/cart";

export default function Cart({ userId }) {
  console.log("cart: ", userId);
  const cart = useStoreState((state) => state.cart);
  const fetchCartItems = useStoreActions((actions) => actions.fetchCartItems);

  useEffect(() => {
    userId && fetchCartItems();
  }, []);

  return <CartComponent cart={cart} />;
}

export async function getServerSideProps({ req, res }) {
  var token = req.cookies.jid;

  var data;
  if (token) {
    data = await queryClient({
      query: gql`
        query VerifyToken($token: String!) {
          VerifyToken(token: $token) {
            message
            verified
            userId
          }
        }
      `,
      variables: { token },
    });
  }

  var verificato = data?.data?.VerifyToken?.verified;

  if (!verificato) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      verificato,
    },
  };
}
