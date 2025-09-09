import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </main>
  )
}


/*cd ~/Flowvid-AI/flowvid-ai*/
