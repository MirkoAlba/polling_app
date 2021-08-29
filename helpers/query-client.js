import { getStandaloneApolloClient } from "../apollo/client/apollo-client";

//queryObject deve essere {query: GQL_QUERY}
export async function queryClient(queryObject) {
  const client = await getStandaloneApolloClient();
  const response = await client.query(queryObject);
  return response;
}
