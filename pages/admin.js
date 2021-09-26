import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

export default function Admin() {
  return <div>admin page</div>;
}

export async function getServerSideProps({ req }) {
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

  if (!verificato?.verified) {
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
