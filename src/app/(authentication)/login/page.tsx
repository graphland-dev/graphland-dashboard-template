"use client";
import { Button, Input, Paper } from "@mantine/core";
import React from "react";

const LoginPage = () => {
  return (
    <Paper>
      <form action="#" className="flex flex-col gap-4">
        <Input.Wrapper label="Email">
          <Input placeholder="Email address" />
        </Input.Wrapper>

        <Input.Wrapper label="Password">
          <Input placeholder="***********" type="password" />
        </Input.Wrapper>

        <Input.Wrapper>
          <Button>Login</Button>
        </Input.Wrapper>
      </form>
    </Paper>
  );
};

export default LoginPage;
