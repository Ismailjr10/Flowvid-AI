"use client"

import { motion } from "framer-motion"
import { Video, Bot, Wand2 } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Video from Prompt",
    desc: "Type an idea, get a video. No editing headaches.",
    status: "Live",
  },
  {
    icon: Wand2,
    title: "AI Avatars",
    desc: "Bring scripts to life with realistic AI presenters.",
    status: "Coming Soon",
  },
  {
    icon: Bot,
    title: "Twitter & Telegram Bots",
    desc: "Generate and post videos automatically with simple tags.",
    status: "Coming Soon",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          What Flowvid AI Can Do
        </motion.h2>
        <p className="text-gray-400 mb-16">
          Fast, automated, and designed for the chaos of the internet.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 flex flex-col items-center text-center"
            >
              <f.icon className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 mb-4">{f.desc}</p>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  f.status === "Live"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {f.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
