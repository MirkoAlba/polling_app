import RegisterLoginForm from "../components/register-login/form";
import { queryClient } from "../helpers/query-client";
import { gql } from "@apollo/client";

export default function Register() {
  return <RegisterLoginForm />;
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

  if (verificato === true) {
    return {
      redirect: {
        permanent: true,
        destination: "/profilo",
      },
    };
  }

  return {
    props: {
      data: data ? data.data : false,
    },
  };
}
