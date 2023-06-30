"use client";
import { ApolloProvider } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import { apolloClient } from "../utils/clients/apollo.client";
import MantainRegistry from "./MantainRegistry";
import { SessionProvider } from "next-auth/react";

const AppGlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider>
        <MantainRegistry>{children}</MantainRegistry>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default AppGlobalProvider;
