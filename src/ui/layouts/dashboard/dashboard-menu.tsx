import { NavLink, Navbar, ScrollArea, Text, Title } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminMenuItems } from "./dashboard-menu.config";
import React from "react";

interface IDashboardProp {
  opened: boolean;
}
const DashboardMenu: React.FC<IDashboardProp> = ({ opened }) => {
  const pathName = usePathname();
  return (
    <Navbar
      p={3}
      hiddenBreakpoint="sm"
      width={{ sm: 230, lg: 250 }}
      hidden={!opened}
    >
      <Navbar.Section p={"sm"}>
        <Title order={4}>Application {opened}</Title>
        <Text>version 0.0.1</Text>
      </Navbar.Section>
      <Navbar.Section grow mt="md" component={ScrollArea}>
        {adminMenuItems.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            component={Link}
            href={item.href}
            active={pathName === item.href}
          />
        ))}
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
};

export default DashboardMenu;
