import AppGlobalProvider from "@/application/providers/AppGlobalProvider";
import "@/styles/globals.css";
import { type Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
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
        <AppGlobalProvider>{children}</AppGlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
