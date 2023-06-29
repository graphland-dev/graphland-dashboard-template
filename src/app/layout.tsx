import "@/styles/globals.css";
import MantainRegistry from "@/application/utils/MantainRegistry";
import DashboardLayout from "@/ui/layouts/dashboard/dashboard";
import React, { PropsWithChildren } from "react";

export const metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme",
  },
  description: "Graphland starter dashboard template",
  themeColor: "black",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MantainRegistry>
          <DashboardLayout>{children}</DashboardLayout>
        </MantainRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
