"use client";
import DashboardLayout from "@/ui/layouts/dashboard/dashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { PropsWithChildren, useEffect, useState } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, status } = useSession({
    required: true,
  });

  useEffect(() => {
    if (status !== "loading") {
      // if (data. !== "authenticated") {
      // }
      redirect("/login?callback=xx");
    }
  }, [status]);

  return (
    <DashboardLayout>
      <pre>{JSON.stringify({ data, status })}</pre>
      {children}
    </DashboardLayout>
  );
};

export default Layout;
