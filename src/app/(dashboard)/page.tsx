"use client";

import { Title } from "@mantine/core";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

const Page: NextPage = () => {
  const { data } = useSession();
  return (
    <div>
      <Title order={2}>Dashboard</Title>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
