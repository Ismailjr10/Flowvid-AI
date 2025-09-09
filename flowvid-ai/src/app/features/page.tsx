"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Wand2, Bot, Clapperboard, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Video className="w-6 h-6 text-purple-500" />,
    title: "AI Video Creation",
    desc: "Turn text into videos in seconds.",
    link: "/features/ai-video",
  },
  {
    icon: <Clapperboard className="w-6 h-6 text-purple-500" />,
    title: "Faceless Videos",
    desc: "Create faceless content without recording.",
    link: "/features/faceless-videos",
  },
  {
    icon: <Wand2 className="w-6 h-6 text-purple-500" />,
    title: "AI Avatars",
    desc: "Bring scripts to life with avatars.",
    link: "/features/avatars",
  },
  {
    icon: <Clapperboard className="w-6 h-6 text-purple-500" />,
    title: "Manual Video Editing",
    desc: "Take full control of your edits.",
    link: "/features/manual-editing",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    title: "AI Video Editing",
    desc: "Automated editing with AI assistance.",
    link: "#",
    comingSoon: true,
  },
  {
    icon: <Bot className="w-6 h-6 text-purple-500" />,
    title: "Twitter, Telegram & Discord Bots",
    desc: "Generate videos with prompts directly in your favorite platforms.",
    link: "#",
    comingSoon: true,
  },
]

export default function FeaturesDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Explore Flowvid AI Features
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Choose a tool to start creating. 🚀
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Card
              key={i}
              className="bg-black border-gray-800 hover:border-purple-600 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {f.icon}
                  <CardTitle>{f.title}</CardTitle>
                </div>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                {f.comingSoon ? (
                  <Button disabled className="w-full bg-gray-700">
                    Coming Soon
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href={f.link}>Try Now</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
