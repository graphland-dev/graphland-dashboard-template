import DashboardLayout from "@/ui/layouts/dashboard/dashboard";
import React, { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
