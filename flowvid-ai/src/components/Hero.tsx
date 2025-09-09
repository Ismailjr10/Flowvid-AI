"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      {/* Title / Punch line */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl"
      >
        Your best video ideas die between tabs. <br />{" "}
        <span className="text-purple-500">We bring them to life.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        Generate faceless videos, AI avatars, and automate content with Twitter & Telegram bots.  
        Everything you need to scale your content, powered by AI.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Try Free – Get 100 Seconds
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
          onClick={() => setIsOpen(true)}
        >
          Join Waitlist
        </Button>
      </motion.div>

      {/* Mockup / placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-12 w-full max-w-4xl"
      >
        <div className="w-full h-64 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400">
          [ App Preview / Coming Soon ]
        </div>
      </motion.div>

      {/* Waitlist Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-sm w-full text-left">
            <h2 className="text-xl font-bold mb-4 text-white">Join the Waitlist</h2>
            <p className="text-gray-400 mb-4 text-sm">
              Be the first to know when Flowvid AI launches. Enter your email below.
            </p>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white mb-4"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
