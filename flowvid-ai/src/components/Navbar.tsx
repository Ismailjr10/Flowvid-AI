"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X, Loader2 } from "lucide-react"
import { useAuth } from "@/context/AuthProvider"
import { useRouter } from "next/navigation"

// shadcn UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
      router.push("/") // redirect after logout
    } finally {
      setLoading(false)
    }
  }

  const handleTryFree = async () => {
    setLoading(true)
    try {
      if (user) {
        router.push("/features") // logged in → features
      } else {
        router.push("/auth") // not logged in → auth
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Flowvid AI"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#cta" className="hover:text-white transition-colors">
            Community
          </Link>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>
                    {user.email?.[0].toUpperCase() ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border border-gray-800 text-white">
                <DropdownMenuItem disabled>
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="text-red-400 focus:text-red-500"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Sign Out"
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
              onClick={handleTryFree}
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Try Free"}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300"
        >
          <Link
            href="#features"
            className="block hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#cta"
            className="block hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Community
          </Link>

          {/* Mobile Auth */}
          {user ? (
            <>
              <span className="block text-sm text-gray-300 mb-2">
                {user.email}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  handleSignOut()
                  setIsOpen(false)
                }}
                disabled={loading}
                className="w-full border-gray-600 text-gray-300 hover:bg-red-600 hover:text-white flex items-center gap-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Sign Out"
                )}
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 w-full flex items-center gap-2"
              onClick={() => {
                handleTryFree()
                setIsOpen(false)
              }}
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Try Free"}
            </Button>
          )}
        </motion.div>
      )}
    </motion.nav>
  )
}
