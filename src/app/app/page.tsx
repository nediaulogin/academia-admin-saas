import { auth } from "@/services/auth"

export default async function Home() {

  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p>Welcome, {session?.user?.email}!</p>
    </main>
  )
}