"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-black text-white">
      {/* Animated headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-6"
      >
        Your best video ideas die between tabs. <br /> We bring them to life.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-gray-400 max-w-2xl mb-8"
      >
        Flowvid AI turns your prompts into scroll-stopping videos in seconds. 
        No editors, no hassle — just creation.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-4"
      >
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Try Free – Get 100 Seconds
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white">
          Learn More
        </Button>
      </motion.div>
    </section>
  )
}
