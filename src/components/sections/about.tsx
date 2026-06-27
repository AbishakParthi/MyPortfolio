"use client"

import { motion } from "framer-motion"
import { FaJava, FaLaptopCode, FaProjectDiagram } from "react-icons/fa"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey, education, and what drives me to build great software." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              BCA Graduate passionate about <span className="text-gradient">Innovation</span>
            </h3>
            <h3 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Aspiring Software Engineer
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a BCA graduate and an aspiring Junior Software Engineer with a strong foundation in Java, Data Structures & Algorithms, Object-Oriented Programming, and Full-Stack Web Development. I enjoy building scalable web applications, solving complex programming problems, and continuously learning modern software engineering practices. My interests include Backend Development, REST API Development, Database Management, Agile Development, and AI-powered applications. I am passionate about writing clean, maintainable code and contributing to innovative software solutions.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Software Developer (Self-Driven Projects):-
              I have independently developed various frontend applications using React and JavaScript. Through these projects, I have gained hands-on experience in integrating APIs, managing application state, implementing responsive designs, and building interactive, user-centric web applications. I am passionate about writing clean, maintainable code and transforming ideas into functional, high-quality software solutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            <TimelineItem 
              title="Java Development"
              description="Building robust, scalable, and object-oriented applications using Java and modern development practices."
              delay={0.1}
              icon={<FaJava size={20} />}
            />
            <TimelineItem 
              title="Full-Stack Web Development"
              description="Building responsive, end-to-end web applications across frontend, backend, and database technologies."
              delay={0.2}
              icon={<FaLaptopCode size={20} />}
            />
            <TimelineItem 
              title="Project Management"
              description="Leading projects from conception to completion with agile methodologies."
              delay={0.3}
              icon={<FaProjectDiagram size={18} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ title, description, delay, icon }: { title: string, description: string, delay: number, icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] z-10 border border-cyan-400/20">
          {icon}
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>
      <GlassCard className="flex-1 pb-6 relative mt-1">
        <h4 className="text-electric-blue text-xl font-bold mt-1 mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </GlassCard>
    </motion.div>
  )
}
