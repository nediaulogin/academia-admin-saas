import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "../database"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/app"
  },
})