"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Hero() {
  const text = "Abishake Parthi"
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[120px] z-0" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-electric-blue via-purple-500 to-cyan-400 mb-8"
        >
          <div className="w-full h-full bg-[#030014] rounded-full flex items-center justify-center overflow-hidden relative">
            <Image 
              src="/profile.jpg" 
              alt="Abishake Parthi" 
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover"
              priority
            />
          </div>
          {/* Glowing Border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-blue via-purple-500 to-cyan-400 blur-xl opacity-50 -z-10 animate-pulse" />
        </motion.div>

        {/* Title / Typing Effect */}
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight text-white"
          >
            Hi, I'm <span className="text-gradient">Abishake Parthi</span>
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          BCA graduate passionate about building efficient and user-friendly digital solutions. Dedicated to turning ideas into functional applications through clean code, creative thinking, and a commitment to continuous learning and innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton 
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => window.location.href = '#projects'}
          >
            View Projects <ArrowRight className="w-4 h-4 ml-2" />
          </MagneticButton>
          
          <MagneticButton 
            className="glass border border-white/20 text-white hover:bg-white/10"
            onClick={() => {
              const link = document.createElement("a")
              link.href = "/AbishakParthi_Resume.pdf"
              link.download = "AbishakParthi_Resume.pdf"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            Download Resume <Download className="w-4 h-4 ml-2" />
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  )
}
