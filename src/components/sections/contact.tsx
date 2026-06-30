"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Send, CheckCircle2, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          ;(e.target as HTMLFormElement).reset()
        }, 5000)
      } else {
        console.error("Form submission failed", data)
      }
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Let's Connect" subtitle="Have a project in mind or just want to say hi? I'd love to hear from you." />
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8 mb-10">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 text-electric-blue mr-3" />
            <span className="font-medium">Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Phone className="w-5 h-5 text-purple-500 mr-3" />
            <span className="font-medium">+91 9025772291</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <GlassCard>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Abishak Parthi"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="abishakeparthi4@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required 
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric-blue to-purple-600 text-white font-bold py-4 hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </MagneticButton>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
