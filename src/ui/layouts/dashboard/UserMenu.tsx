"use client";

import { confirmModal } from "@/application/common/confirm/confirm";
import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

const UserMenu = () => {
  const handleLogout = () => {
    confirmModal({
      title: "Sure to logout?",
      isDangerous: true,
      onConfirm() {
        signOut();
      },
    });
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar variant="filled" color={"blue"} className="cursor-pointer">
          R
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => alert("Will be implimented")}
          icon={<IconSettings size={22} />}
        >
          Settings
        </Menu.Item>
        <Menu.Item onClick={handleLogout} icon={<IconLogout size={22} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
