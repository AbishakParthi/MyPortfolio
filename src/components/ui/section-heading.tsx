"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, className, align = "center" }: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  }[align]

  return (
    <div className={cn("mb-12", alignmentClass, className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className={cn(
            "text-lg md:text-xl text-gray-400 max-w-2xl font-light",
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        className={cn(
          "h-1 bg-gradient-to-r from-electric-blue to-purple mt-6 rounded-full",
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        )}
      />
    </div>
  )
}
