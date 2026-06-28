"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Command } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("#")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (window.scrollY < 100) {
        setActiveSection('#')
      }
    }
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-30% 0px -70% 0px" }
    )

    navLinks.forEach((link) => {
      if (link.href.startsWith('#') && link.href !== '#') {
        const target = document.querySelector(link.href)
        if (target) observer.observe(target)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      <div
        className={cn(
          "transition-all duration-300 w-full",
          isScrolled ? "py-4 glass border-b-0 shadow-lg" : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
          <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="text-2xl font-bold font-space-grotesk tracking-tighter flex items-baseline">
            <span className="text-gradient">AP</span>
            <span className="text-white -ml-[2px]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  activeSection === link.href ? "text-white" : "text-gray-300 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-electric-blue transition-all",
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              className="p-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm border border-white/10 rounded-full px-4 glass"
            >
              <Command className="w-4 h-4" />
              <span>Cmd + K</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden w-full glass border-t-0 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={cn(
                    "text-lg font-medium transition-colors py-2",
                    activeSection === link.href ? "text-electric-blue" : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
