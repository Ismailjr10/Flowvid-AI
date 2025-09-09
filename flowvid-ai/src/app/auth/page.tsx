"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useAuth } from "@/context/AuthProvider"

export default function AuthPage() {
  const { user, signIn, signUp, signInWithGoogle } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  // If logged in, redirect away from /auth
  useEffect(() => {
    if (user) {
      router.push("/features") // ✅ Change to /dashboard if you want
    }
  }, [user, router])

  const handleSignIn = async () => {
    const { error } = await signIn(email, password)
    if (!error) router.push("/features")
  }

  const handleSignUp = async () => {
    const { error } = await signUp(email, password)
    if (!error) router.push("/features")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
      <Card className="w-full max-w-md bg-black border-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to Flowvid AI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            {/* Tab Headers */}
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Sign In */}
            <TabsContent value="signin">
              <div className="space-y-4">
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleSignIn} className="w-full bg-purple-600 hover:bg-purple-700">
                  Sign In
                </Button>
                <Button
                  onClick={signInWithGoogle}
                  variant="outline"
                  className="w-full"
                >
                  Continue with Google
                </Button>
              </div>
            </TabsContent>

            {/* Sign Up */}
            <TabsContent value="signup">
              <div className="space-y-4">
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleSignUp} className="w-full bg-purple-600 hover:bg-purple-700">
                  Create Account
                </Button>
                <Button
                  onClick={signInWithGoogle}
                  variant="outline"
                  className="w-full"
                >
                  Continue with Google
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
