import { env } from "@/application/config/t3-env.config";
import { addSeconds } from "date-fns";
import jwt_decode from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  secret: "secret",
  logger: {
    debug(code, metadata) {},
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email", required: true },
        password: { type: "text", required: true },
      },
      async authorize(credentials) {
        const tokens = await tokenUsingCredentials(
          credentials?.email as string,
          credentials?.password as string
        );

        if (!tokens) return null;
        // const user = await getUser(tokens?.accessToken as string);
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
        const updatedToken = await refreshToken(token.refreshToken);
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
  pages: {
    signIn: "/login",
  },
});

const refreshToken = async (refresh_token: string): Promise<string | null> => {
  const tokenAPi = await fetch(env.IDENTITY_SERVER_HOST + "/auth/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      refresh_token,
      grant_type: "refresh_token",
      appId: env.IDENTITY_APPID,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Origin: "http://localhost:3000",
    },
  });
  const tokenResponse = await tokenAPi.json();
  if (tokenAPi.status !== 201 || !tokenResponse.accessToken) {
    return null;
  }
  return tokenResponse.accessToken;
};

/**
 * Get user details from auth server
 * @param accessToken - access token
 * @returns
 */
// const getUser = async (accessToken: string): Promise<IAuthUser | null> => {
//   const api = await fetch(
//     EnvironmentVariables.NEXT_PUBLIC_API_REST_URL + "/auth/current-user",
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + accessToken,
//       },
//     }
//   );
//   if (!api.ok) {
//     return null;
//   }
//   return api.json();
// };

/**
 * Get access token and refresh token from auth server
 * @param email - email
 * @param password - password
 * @returns
 */
const tokenUsingCredentials = async (
  email: string,
  password: string
): Promise<{
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
} | null> => {
  const api = await fetch(process.env.IDENTITY_API + "/auth/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      grant_type: "password",
      appId: process.env.IDENTITY_APP_ID,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Origin: "http://localhost:3000",
    },
  });
  const response = await api.json();
  if (api.status !== 201) {
    throw new Error(response.error);
  }
  return response;
};
