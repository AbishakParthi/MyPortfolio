"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "C#", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "PHP", "Node.js", "REST APIs"]
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "Postman"]
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "DSA", "Problem Solving", "System Design"]
  },
  {
    title: "Currently Learning",
    skills: ["Microservices", "AI Development", "Cloud Computing"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building high-performance, intelligent software."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard hoverEffect className="h-full">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-electric-blue transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
