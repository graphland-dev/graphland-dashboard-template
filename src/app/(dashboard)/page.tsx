"use client";

import { Button, Text } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";

const Page = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default Page;
