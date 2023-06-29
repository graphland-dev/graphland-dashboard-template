"use client";

import { Header, useMantineColorScheme } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import UserMenu from "./UserMenu";

const DashboardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header
      height={60}
      p={"xs"}
      bg={"transparent"}
      withBorder={false}
      className="flex items-center justify-end"
    >
      {children}
      <div className="justify-self-end">
        <button onClick={() => toggleColorScheme()}>dark</button>
        <UserMenu />
      </div>
    </Header>
  );
};

export default DashboardHeader;
