"use client";

import React, { PropsWithChildren } from "react";
import { NextAuthContext } from "../contexts/NextAuthContent";

const NextAuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  //   const session = useSession();
  return (
    <NextAuthContext.Provider value={{}}>{children}</NextAuthContext.Provider>
  );
};

export default NextAuthContextProvider;
