import "../sass/index.scss"; //scss style
import Layout from "../components/layout/layout";

import { useEffect, useState } from "react";

import cookie from "cookie";
import App from "next/app";
import { AuthProvider } from "../apollo/client/apollo-client";
import { setAccessToken } from "../apollo/client/accessToken";
import { getStandaloneApolloClient } from "../apollo/client/apollo-client";
import { gql } from "@apollo/client";

async function getCurrUser() {
  const client = await getStandaloneApolloClient();
  // la query ritora true o false
  const { data } = await client.query({
    query: gql`
      query {
        Me
      }
    `,
    // fetchPolicy: "cache-first",
  });

  return data?.Me;
}

function MyApp({ Component, pageProps, token }) {
  setAccessToken(token);

  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(async () => {
    // faccio Me query ogni volta che ri-rendera per verificare user loggato
    // in questo modo sono sicuro che jwt è stato verificato server-side
    const user = await getCurrUser();
    setIsLoggedIn(user);
  }); //eseguo ogni volta che _app re-rendera

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

  // se non è presente il cookie vuol dire che non è stata fatta la login

  // ritorno il token nelle props
  return { ...appProps, token: tokenInCookie?.jid };
};

export default MyApp;
