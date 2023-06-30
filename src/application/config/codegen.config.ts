import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphqlzero.almansi.me/api",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/application/gql/": {
      preset: "client",
    },
  },
};

export default config;
