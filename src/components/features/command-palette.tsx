"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Home, User, Code, Briefcase, Mail, FileText } from "lucide-react"

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === "Escape") setIsOpen(false)
    }
    
    const handleOpen = () => setIsOpen(true)

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("open-command-palette", handleOpen)
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("open-command-palette", handleOpen)
    }
  }, [])

  const links = [
    { name: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Experience", href: "#experience", icon: <FileText className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ]

  const filteredLinks = links.filter(link => link.name.toLowerCase().includes(search.toLowerCase()))

  const handleSelect = (href: string) => {
    setIsOpen(false)
    window.location.href = href
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] p-4"
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center px-4 py-3 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-gray-500"
                />
                <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">ESC</div>
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredLinks.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500 text-sm">
                    No results found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleSelect(link.href)}
                        className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors"
                      >
                        <span className="mr-3 text-gray-400">{link.icon}</span>
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
