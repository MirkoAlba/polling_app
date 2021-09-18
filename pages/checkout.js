import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

import CheckoutComponent from "../components/cart/checkout-component";

export default function Checkout() {
  return <CheckoutComponent />;
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
