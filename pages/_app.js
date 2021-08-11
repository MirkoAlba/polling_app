import "../sass/index.scss"; //scss style
import Layout from "../components/layout/layout";

import { AuthProvider } from "../apollo/client/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
