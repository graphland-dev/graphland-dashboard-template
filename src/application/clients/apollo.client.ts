import { env } from "@/application/config/t3-env.config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(), // TODO: replace it with redis
});
