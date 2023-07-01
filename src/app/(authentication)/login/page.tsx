"use client";
import { Button, Input, Paper } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const [state, setState] = useSetState({
    email: "",
    password: "",
  });

  const handleOnSubmit = () => {
    signIn("credentials", {
      email: state.email,
      password: state.password,
      redirect: false,
    });
  };

  return (
    <Paper>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <form
        action="#"
        className="flex flex-col gap-4"
        onSubmit={handleOnSubmit}
      >
        <Input.Wrapper label="Email">
          <Input
            placeholder="Email address"
            onChange={(e) => setState({ email: e.target.value })}
          />
        </Input.Wrapper>

        <Input.Wrapper label="Password">
          <Input
            placeholder="***********"
            type="password"
            onChange={(e) => setState({ password: e.target.value })}
          />
        </Input.Wrapper>

        <Input.Wrapper>
          <Button>Login</Button>
        </Input.Wrapper>
      </form>
    </Paper>
  );
};

export default LoginPage;
