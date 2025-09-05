"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for testing the waters.",
    features: [
      "100 free seconds monthly",
      "Access to text-to-video",
      "Community support",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$15/mo",
    desc: "For solo creators & meme pages.",
    features: [
      "1,000 seconds monthly",
      "HD video export",
      "Priority rendering",
    ],
    cta: "Subscribe",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49/mo",
    desc: "For startups & small teams.",
    features: [
      "5,000 seconds monthly",
      "Team collaboration",
      "Custom AI workflows",
    ],
    cta: "Subscribe",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For agencies & big brands.",
    features: [
      "Unlimited usage",
      "Dedicated AI models",
      "Custom integrations",
    ],
    cta: "Contact Us",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Simple, transparent pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Start free. Scale as your content grows. Cancel anytime.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.highlight ? "border-purple-500 shadow-lg" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-3xl font-bold mt-2">{plan.price}</p>
                  <p className="text-gray-400 mt-1">{plan.desc}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="text-left text-gray-400 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="mb-2">
                        • {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-auto ${
                      plan.highlight
                        ? "bg-purple-600 hover:bg-purple-700"
                        : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
