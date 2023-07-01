"use client";
import { ApolloProvider } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import { apolloClient } from "../clients/apollo.client";
import MantainRegistry from "./MantainRegistry";
import NextAuthProvider from "./NextAuthProvider";
import NextAuthContextProvider from "./NextAuthContextProvider";
import { useSession } from "next-auth/react";

const AppGlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <NextAuthProvider>
        <MantainRegistry>{children}</MantainRegistry>
      </NextAuthProvider>
    </ApolloProvider>
  );
};

export default AppGlobalProvider;
