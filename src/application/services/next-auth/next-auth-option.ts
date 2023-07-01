import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { accessTokenAPI, refreshTokenAPI } from "../identity/identity-api";
import { addSeconds } from "date-fns";
import jwt_decode from "jwt-decode";

export const nextAuthOptions: NextAuthOptions = {
  logger: {
    debug(code, metadata) {},
  },
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", placeholder: "Email" },
        password: { type: "password", placeholder: "*****" },
      },
      async authorize(credentials) {
        const tokens = await accessTokenAPI(
          credentials?.email as string,
          credentials?.password as string
        );
        if (!tokens) return null;

        const decodedUser = jwt_decode(tokens?.accessToken as string) as any;
        const sessionUser = {
          id: decodedUser.meta["meta:userId"],
          accessToken: tokens?.accessToken,
          refreshToken: tokens?.refreshToken,
          tokenSuspendedAt: addSeconds(new Date(), tokens?.expiresIn),
          tokenLifetime: tokens?.expiresIn,
          details: {
            sub: decodedUser?.meta["meta:userId"],
            name: decodedUser?.name,
            email_verified: decodedUser?.email_verified,
            email: decodedUser?.email,
            vendorId: decodedUser?.meta["meta:vendorIds"][0],
          },
        };

        return Promise.resolve(sessionUser);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // this is the user object from authorize callback
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user.details;
        token.tokenSuspendedAt = user.tokenSuspendedAt;
      }

      // compare the suspended time with current time
      if (new Date(token.tokenSuspendedAt) < new Date()) {
        // check if token is expired
        const updatedToken = await refreshTokenAPI(token.refreshToken);
        if (updatedToken) {
          token.accessToken = updatedToken;
          token.tokenSuspendedAt = addSeconds(new Date(), user.tokenLifetime);
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.user = token.user;
      return session;
    },
  },
};
