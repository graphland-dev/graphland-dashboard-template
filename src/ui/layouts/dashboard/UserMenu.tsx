"use client";

import { Avatar, Button, Menu } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

const UserMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar variant="filled" color={"blue"} className="cursor-pointer">
          R
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
