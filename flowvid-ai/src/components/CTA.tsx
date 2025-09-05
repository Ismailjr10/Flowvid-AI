"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Ready to create in seconds?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto"
      >
        Stop juggling tools. Flowvid AI gives you everything you need to 
        turn ideas into scroll-stopping videos instantly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button size="lg" className="bg-black hover:bg-gray-900">
          Start Free – No Credit Card Needed
        </Button>
      </motion.div>
    </section>
  )
}
