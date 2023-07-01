"use client";

import { Button, Header, Menu, useMantineColorScheme } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import UserMenu from "./UserMenu";
import {
  IconDeviceLaptop,
  IconMoon,
  IconSubmarine,
  IconSunHigh,
} from "@tabler/icons-react";
import { useColorScheme } from "@mantine/hooks";
import ThemeSwitcherMenu from "./ThemeSwitcherMenu";

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
      <div className="flex items-center gap-4">
        <ThemeSwitcherMenu />
        <UserMenu />
      </div>
    </Header>
  );
};

export default DashboardHeader;
