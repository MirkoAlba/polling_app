import "../sass/index.scss"; //scss style

import Layout from "../components/layout/layout";

import { useState } from "react";

import cookie from "cookie";
import App from "next/app";
import { AuthProvider } from "../apollo/client/apollo-client";
import { gql } from "@apollo/client";
import { queryClient } from "../helpers/query-client";
import { setAccessToken } from "../apollo/client/accessToken";

function MyApp({ Component, pageProps, token }) {
  const [isLoggedIn, setIsLoggedIn] = useState(token.verified);

  return (
    <AuthProvider>
      <Layout isLoggedIn={isLoggedIn}>
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
      </Layout>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  // prima che la mia app venga renderizzata controllo che il token
  // sia presente in tutte le req quindi lo prendo e lo parso
  var tokenInCookie;
  if (appContext.ctx.req?.headers.cookie) {
    tokenInCookie = cookie.parse(appContext.ctx.req?.headers.cookie);
  }

  var token = tokenInCookie ? tokenInCookie.jid : "tokenfasullo"; //estraggo token dal cookie
  setAccessToken(token); //setto il token per averlo a disposizione nei resolver tramite context
  var data;
  //verifico token facendo query all API
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

  const response = data?.data?.VerifyToken;

  // ritorno oggetto verificato nelle props
  return { ...appProps, token: response };
};

export default MyApp;
