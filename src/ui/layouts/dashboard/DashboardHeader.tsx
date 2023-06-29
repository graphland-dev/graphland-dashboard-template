"use client";

import { Header } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import UserMenu from "./UserMenu";

const DashboardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Header
      height={60}
      p={"xs"}
      bg={"transparent"}
      withBorder={false}
      className="flex items-center justify-end"
    >
      {children}
      <div className=" justify-self-end">
        <UserMenu />
      </div>
    </Header>
  );
};

export default DashboardHeader;
