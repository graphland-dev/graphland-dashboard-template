import { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./t3-env.config";
// https://graphqlzero.almansi.me/api
const config: CodegenConfig = {
  schema: env.NEXT_PUBLIC_GRAPHQL_API_URL,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/application/gql/": {
      preset: "client",
    },
  },
};

export default config;
