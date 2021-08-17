import "../sass/custom.scss"; //scss style

import Layout from "../components/layout/layout";

import { useState } from "react";
import Head from "next/head";
import useWindowDimensions from "../helpers/checkViewport";

import cookie from "cookie";
import App from "next/app";
import { AuthProvider } from "../apollo/client/apollo-client";
import { gql } from "@apollo/client";
import { queryClient } from "../helpers/query-client";
import { setAccessToken } from "../apollo/client/accessToken";

function MyApp({ Component, pageProps, token }) {
  const [isLoggedIn] = useState(token.verified);
  const { width, height } = useWindowDimensions();

  //serve per patchare le proprietà che non vanno su alcuni browser (scrollIntoView safari)

  return (
    <AuthProvider>
      <Head>
        <script>window.__forceSmoothScrollPolyfill__ = true;</script>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.js"></script>
      </Head>
      <Layout
        viewportWidth={width}
        viewportHeight={height}
        isLoggedIn={isLoggedIn}
      >
        <Component
          {...pageProps}
          viewportWidth={width}
          viewportHeight={height}
          isLoggedIn={isLoggedIn}
        />
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
