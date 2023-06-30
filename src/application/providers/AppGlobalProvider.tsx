"use client";
import { ApolloProvider } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import { apolloClient } from "../utils/clients/apollo.client";
import MantainRegistry from "./MantainRegistry";

const AppGlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <MantainRegistry>{children}</MantainRegistry>
    </ApolloProvider>
  );
};

export default AppGlobalProvider;
