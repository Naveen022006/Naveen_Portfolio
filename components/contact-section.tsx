"use client"

import { useState, useRef } from "react"
import { Mail, MapPin, Clock, Github, Linkedin, Send, Instagram } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { MagneticButton } from "./magnetic-button"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Let&apos;s Build Something </span>
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I&apos;m currently looking for internships, freelance work, and collaborative projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl group-hover:bg-purple-500/30 transition-all duration-300 mt-1">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <a
                      href="mailto:kanagunaveen21@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      kanagunaveen21@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl group-hover:bg-cyan-500/30 transition-all duration-300 mt-1">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-400">Puducherry, India (IST)</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl group-hover:bg-pink-500/30 transition-all duration-300 mt-1">
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Availability</h3>
                    <p className="text-gray-400">Open for opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <MagneticButton href="https://github.com/Naveen022006">
                    <div className="p-3 glass rounded-xl hover:bg-purple-500/30 transition-all duration-300 group">
                      <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </MagneticButton>
                  <MagneticButton href="https://www.linkedin.com/in/naveen-k-bb11372a5">
                    <div className="p-3 glass rounded-xl hover:bg-blue-500/30 transition-all duration-300 group">
                      <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </MagneticButton>
                  <MagneticButton href="https://www.instagram.com/naveen_k_2102?igsh=eXEwdzJjdWljdXRt">
                    <div className="p-3 glass rounded-xl hover:bg-pink-500/30 transition-all duration-300 group">
                      <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/5 hover:border-purple-500/30 transition-all duration-700">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Naveen"
                    className="w-full px-4 py-3 glass rounded-xl border border-purple-500/20 focus:border-purple-500/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 bg-gray-900/50 hover:bg-gray-900/70 focus:bg-gray-900/80"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="naveen@dev.com"
                    className="w-full px-4 py-3 glass rounded-xl border border-purple-500/20 focus:border-purple-500/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 bg-gray-900/50 hover:bg-gray-900/70 focus:bg-gray-900/80"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Let's discuss how I can help you"
                    className="w-full px-4 py-3 glass rounded-xl border border-purple-500/20 focus:border-purple-500/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 bg-gray-900/50 hover:bg-gray-900/70 focus:bg-gray-900/80 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 glass rounded-xl border border-green-500/50 bg-green-500/10">
                    <p className="text-green-300 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 glass rounded-xl border border-red-500/50 bg-red-500/10">
                    <p className="text-red-300 text-sm">✗ Error sending message. Please try again.</p>
                  </div>
                )}

                {/* Send Button */}
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
