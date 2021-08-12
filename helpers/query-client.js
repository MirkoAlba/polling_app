import { getStandaloneApolloClient } from "../apollo/client/apollo-client";

export async function queryClient(queryObject) {
  const client = await getStandaloneApolloClient();
  const response = await client.query(queryObject);
  return response;
}
