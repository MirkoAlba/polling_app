import { useEffect } from "react";

import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

import { useStoreActions } from "easy-peasy";

import CartComponent from "../components/cart/cart";

export default function Cart({ userId, viewportWidth }) {
  const fetchCartItems = useStoreActions((actions) => actions.fetchCartItems);

  useEffect(() => {
    userId && fetchCartItems();
  }, []);

  return <CartComponent viewportWidth={viewportWidth} />;
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
            isAdmin
          }
        }
      `,
      variables: { token },
    });
  }

  var verificato = data?.data?.VerifyToken;

  if (!verificato.verified) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  if (verificato.isAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
    };
  }

  return {
    props: {
      verificato,
    },
  };
}
