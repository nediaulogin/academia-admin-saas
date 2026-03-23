import { PrismaClient } from "@prisma/client"

console.log("DATABASE_URLlllll:", process.env.DATABASE_URL)
export const prisma = new PrismaClient()