import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

import Router from "next/router";

export default function Profilo({ isLoggedIn }) {
  return <div>profilo</div>;
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
          }
        }
      `,
      variables: { token },
    });
  }

  var verificato = data?.data?.VerifyToken.verified;

  if (!verificato) {
    return {
      redirect: {
        permanent: false,
        destination: "/register",
      },
    };
  }

  return {
    props: {
      data: data ? data.data : false,
    },
  };
}
