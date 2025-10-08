import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-pretty md:text-5xl">Welcome to your app</h1>
      <p className="text-muted-foreground leading-relaxed text-pretty">
        A clean starting point for your product. Log in to continue, or create an account to get started.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild>
          <Link href="/login" aria-label="Go to Login page">
            Login
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/signup" aria-label="Go to Sign Up page">
            Sign Up
          </Link>
        </Button>
      </div>
      <div>
        <Button asChild variant="outline">
          <Link href="/dashboard" aria-label="Go to Sign Up page">
            Dashboard
          </Link>
        </Button>
      </div>
      </div>
  )
}
