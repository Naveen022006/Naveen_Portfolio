"use client"

import { Instagram, Send, Github, Twitter, Linkedin, Heart } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"
import { MagneticButton } from "./magnetic-button"

const communityLinks = [
  { name: "Github", icon: Github, href: "https://github.com/Naveen022006" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/ignaveen01" },
  { name: "LinkedIn", icon: Linkedin, href: "www.linkedin.com/in/mr-naveen-bb11372a5" },
]

const aboutLinks = [
  { name: "About Me", href: "#about" },
  { name: "My Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal direction="up" delay={0}>
            <div className="lg:col-span-1">
              <MagneticButton>
                <Link href="#" className="flex items-center gap-3 mb-6 group">
                  <span className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    NAVEEN
                  </span>
                </Link>
              </MagneticButton>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building exceptional digital experiences with cutting-edge technologies.
              </p>
              {/* Social icons with magnetic effect */}
              <div className="flex gap-4">
                <MagneticButton href="https://instagram.com/ignaveen01">
                  <div className="p-3 glass rounded-xl hover:bg-purple-500/30 transition-all duration-300 group">
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Community */}
          <ScrollReveal direction="up" delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6">Community</h4>
              <ul className="space-y-4">
                {communityLinks.map((link, index) => (
                  <li key={link.name} style={{ transitionDelay: `${index * 50}ms` }}>
                    <MagneticButton href={link.href}>
                      <span className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <link.icon className="w-5 h-5 group-hover:text-purple-400 group-hover:scale-110 transition-all" />
                        {link.name}
                      </span>
                    </MagneticButton>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Social Media */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6">Social Media</h4>
              <ul className="space-y-4">
                {socialLinks.map((link, index) => (
                  <li key={link.name} style={{ transitionDelay: `${index * 50}ms` }}>
                    <MagneticButton href={link.href}>
                      <span className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <link.icon className="w-5 h-5 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
                        {link.name}
                      </span>
                    </MagneticButton>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* About */}
          <ScrollReveal direction="up" delay={300}>
            <div>
              <h4 className="text-white font-semibold mb-6">About</h4>
              <ul className="space-y-4">
                {aboutLinks.map((link, index) => (
                  <li key={link.name} style={{ transitionDelay: `${index * 50}ms` }}>
                    <MagneticButton>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block"
                      >
                        {link.name}
                      </a>
                    </MagneticButton>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <ScrollReveal direction="up" delay={400}>
          <div className="pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">© NAVEEN 2026. All rights reserved.</p>
              <p className="flex items-center gap-2 text-gray-500 text-sm group cursor-default">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 animate-pulse group-hover:scale-125 transition-transform" /> by
                NAVEEN
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
