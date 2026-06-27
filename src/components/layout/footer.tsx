"use client"

import { motion } from "framer-motion"
import { ArrowUp, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/10 bg-[#030014] pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">Abishake Parthi</h3>
            <p className="text-gray-400">Building intelligent software that solves real-world problems.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <SocialLink href="https://github.com/AbishakParthi" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com/in/abishake-parthi" icon={<FaLinkedin />} />
            <SocialLink href="mailto:contact@abishakeparthi.com" icon={<Mail />} />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Abishake Parthi. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  )
}
