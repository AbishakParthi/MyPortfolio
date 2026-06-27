"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"

const achievements = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies Learned", value: 15, suffix: "+" },
  { label: "Coding Hours", value: 1000, suffix: "+" },
  { label: "GitHub Commits", value: 90, suffix: "+" },
  { label: "DSA Problems Solved", value: 80, suffix: "+" }
]

export function Achievements() {
  return (
    <section className="py-20 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {achievements.map((item, idx) => (
            <Counter key={idx} label={item.label} value={item.value} suffix={item.suffix} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ label, value, suffix, delay }: { label: string, value: number, suffix: string, delay: number }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      className="flex flex-col items-center justify-center"
    >
      <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}
