import { DefaultSession } from "next-auth";

export interface IUser {}

export interface IAuthUser {
  sub: string;
  name: string;
  email: string;
  email_verified: boolean;
  //   roles: string[];
  //   permissioms: string[];
  vendorId: string;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    refreshToken: string;
    tokenSuspendedAt: Date;
    user: IAuthUser;
  }
  interface User {
    accessToken: string;
    refreshToken: string;
    tokenSuspendedAt: Date;
    tokenLifetime: number;
    details: IAuthUser;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    refreshToken: string;
    tokenSuspendedAt: Date;
    user: tokenSuspendedAt;
  }
}
