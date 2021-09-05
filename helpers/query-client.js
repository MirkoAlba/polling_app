import { getStandaloneApolloClient } from "../apollo/client/apollo-client";

//queryObject deve essere {query: GQL_QUERY}
export async function queryClient(queryObject) {
  const client = await getStandaloneApolloClient();
  return await client.query(queryObject);
}

//primo param query gql solita secondo deve essere obj: {nomeVariable: valoreVariabile}
export async function queryClientWithVariables(query, variables) {
  const client = await getStandaloneApolloClient();
  return await client.query({
    query,
    variables,
  });
}
