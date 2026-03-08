"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { TextReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePos({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center">
        {/* Text Content */}
        <div className={`space-y-8 flex flex-col items-start max-w-2xl text-left ${mounted ? "opacity-100" : "opacity-0"}`}>
          {/* Badge */}
          <ScrollReveal direction="up" delay={100}>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Fullstack Developer Portfolio</span>
            </div>
          </ScrollReveal>

          {/* Main Heading with character reveal */}
          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Hi This is</span>

              <br />
              <span className="text-white">Naveen </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={400}>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development.
              Check out my projects and skills.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal direction="up" delay={600}>
            <MagneticButton>
              <button className="group relative px-8 py-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <span className="relative flex items-center gap-2 text-white font-semibold">
                  Learn More
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator with bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <MagneticButton>
          <div className="glass p-3 rounded-full hover:bg-purple-500/30 transition-colors cursor-pointer">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </MagneticButton>
      </div>
    </section>
  )
}
