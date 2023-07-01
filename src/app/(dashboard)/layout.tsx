"use client";
import DashboardLayout from "@/ui/layouts/dashboard/dashboard";
import { LoadingOverlay } from "@mantine/core";
import { useSession } from "next-auth/react";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession({
    required: true,
  });
  return (
    <div className="relative">
      <LoadingOverlay visible={status === "loading"} overlayBlur={100} />
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default Layout;
