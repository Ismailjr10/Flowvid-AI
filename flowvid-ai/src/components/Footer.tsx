"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black border-t border-gray-800 py-10 text-gray-400"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-white">
          Flowvid <span className="text-purple-500">AI</span>
        </Link>

        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#community" className="hover:text-white transition-colors">
            Community
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>

        {/* Right: Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Flowvid AI. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
