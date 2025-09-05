"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#community" className="hover:text-white transition-colors">
            Community
          </Link>
        </div>

        {/* CTA */}
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          Get Started
        </Button>
      </div>
    </motion.nav>
  )
}
