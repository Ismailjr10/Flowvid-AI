"use client"

import { motion } from "framer-motion"
import { Video, Bot, Sparkles, Wand2, Scissors, Wand } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Video,
    title: "AI Video Creation",
    desc: "Turn your text into fully generated videos instantly.",
    status: "Live",
    slug: "text-to-video",
  },
  {
    icon: Sparkles,
    title: "Faceless Videos",
    desc: "Generate engaging videos without ever showing your face.",
    status: "Live",
    slug: "faceless",
  },
  {
    icon: Wand2,
    title: "AI Avatars",
    desc: "Bring scripts to life with realistic AI presenters.",
    status: "Live",
    slug: "avatars",
  },
  {
    icon: Scissors,
    title: "Manual Editing",
    desc: "Refine and customize videos with manual editing tools.",
    status: "Live",
    slug: "manual-editing",
  },
  {
    icon: Wand,
    title: "AI Video Editing",
    desc: "Smart editing features powered by AI.",
    status: "Coming Soon",
    slug: "ai-editing",
  },
  {
    icon: Bot,
    title: "Bot Integration",
    desc: "Generate videos in Twitter, Telegram, or Discord with simple prompts — ready on our site or posted directly.",
    status: "Coming Soon",
    slug: "bots",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What Flowvid AI Can Do
        </motion.h2>
        <p className="text-gray-400 mb-16">
          Fast, automated, and designed for the chaos of the internet.
        </p>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-left hover:border-purple-600 transition"
            >
              <f.icon className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 mb-4">{f.desc}</p>

              {f.status === "Coming Soon" ? (
                <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">
                  Coming Soon
                </span>
              ) : (
                <Link href={`/features/${f.slug}`}>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Try Now
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
