"use client";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import DashboardMenu from "./dashboard-menu";
import { useDisclosure } from "@mantine/hooks";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [opened, handler] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      layout="alt"
      navbar={<DashboardMenu opened={opened} />}
      header={
        <Header height={60} p="xs">
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={handler.toggle}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
