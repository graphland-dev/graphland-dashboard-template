"use client";
import { Container } from "@mantine/core";
import React, { PropsWithChildren } from "react";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container size={"xs"} my={"lg"}>
      {children}
    </Container>
  );
};

export default layout;
