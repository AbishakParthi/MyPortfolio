"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { GraduationCap, Laptop, Lightbulb, Brain, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Frontend Development Intern",
    organization: "Coderz Vision Technology",
    period: "Dec 2025 - Jan 2026",
    description: "Successfully completed an intensive frontend development internship, gaining hands-on professional experience in building web interfaces and modern web technologies.",
    icon: <Briefcase className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Loyola College, Chennai",
    period: "2023 - 2026",
    description: "Focused heavily on core programming principles, database management systems, and software engineering methodologies.",
    icon: <GraduationCap className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Independent Software Developer",
    organization: "Personal Projects",
    period: "2024 - 2026",
    description: "Designing and developing full-stack web applications and Java projects while strengthening problem-solving, data structures, and software engineering skills.",
    icon: <Laptop className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Software Engineering Learner",
    organization: "Self-Learning",
    period: "2024 - 2026",
    description: "Continuously learning data structures, algorithms, Java, and full-stack web development by building practical projects and exploring modern technologies.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Self-Guided AI Research",
    organization: "Personal Projects",
    period: "2025 - 2026",
    description: "Deep diving into LLMs, prompt engineering, and integrating AI services into traditional web applications.",
    icon: <Brain className="w-6 h-6 text-electric-blue" />
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Experience & Education" subtitle="My academic background and hands-on technical journey." />
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-0 md:pl-24"
              >
                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-[#030014] border border-white/20 items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {exp.icon}
                </div>
                
                <GlassCard hoverEffect className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-space-grotesk">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-gray-500 font-mono text-sm mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-block w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
