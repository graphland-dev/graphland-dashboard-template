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

const DashboardHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const preferredColorScheme = useColorScheme();
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
      <div className="flex items-center gap-4">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            {colorScheme === "dark" ? (
              <IconMoon className="cursor-pointer" />
            ) : (
              <IconSunHigh className="cursor-pointer" />
            )}
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={() => toggleColorScheme("light")}
              icon={<IconSunHigh size={14} />}
            >
              Light
            </Menu.Item>
            <Menu.Item
              onClick={() => toggleColorScheme("dark")}
              icon={<IconMoon size={14} />}
            >
              Dark
            </Menu.Item>
            <Menu.Item
              onClick={() => toggleColorScheme(preferredColorScheme)}
              icon={<IconDeviceLaptop size={14} />}
            >
              System
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <UserMenu />
      </div>
    </Header>
  );
};

export default DashboardHeader;
