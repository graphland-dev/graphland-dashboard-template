import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", placeholder: "Email" },
        password: { type: "password", placeholder: "*****" },
      },
      authorize(credentials) {
        return Promise.resolve({
          id: "1",
          name: "Rayhan",
        });
      },
    }),
  ],
};
