import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

import Profile from "../components/profile/profile";

export default function Profilo({ userId }) {
  //non c'è bisogno di controllare isLoggedIn perchè questa route è protetta da getServerSideProps
  return <Profile userId={userId} />;
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
        destination: "/register",
      },
    };
  }

  return {
    props: {
      verificato,
    },
  };
}
