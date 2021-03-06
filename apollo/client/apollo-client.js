import { createContext, useContext } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { getAccessToken } from "./accessToken";

const dynamicUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/graphql"
    : "https://production-url/api/graphql";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function getStandaloneApolloClient() {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // const authLink = new ApolloLink((operation, next) => {
  //   // prendo il token
  //   var token = getAccessToken();

  //   // token = operation.variables.token;

  //   operation.setContext((context) => ({
  //     ...context,
  //     headers: {
  //       ...context.headers,
  //       authorization: token ? `Bearer ${token}` : "", //lo passo negli headers della req
  //     },
  //   }));

  //   return next(operation);
  // });

  const authLink = setContext((_, { headers }) => {
    // prendo il token
    const token = getAccessToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "", //lo passo negli headers della req
      },
    };
  });

  const httpLink = new HttpLink({
    uri: dynamicUri,
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
}

export function AuthProvider({ children }) {
  const client = getStandaloneApolloClient();
  return (
    <authContext.Provider value={client}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </authContext.Provider>
  );
}
