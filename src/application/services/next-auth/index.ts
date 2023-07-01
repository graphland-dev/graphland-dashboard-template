import NextAuth from "next-auth";
import { nextAuthOptions } from "./next-auth-option";

export const nextAuthHandler = NextAuth(nextAuthOptions);
