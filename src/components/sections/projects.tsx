"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { SectionHeading } from "@/components/ui/section-heading"

const projects = [
  {
    title: "Insurance Company Portfolio Website",
    description: "A comprehensive portfolio website for an insurance company featuring policy browsing, quote generation, and client portal.",
    image: "insucare.png",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    github: "https://github.com/AbishakParthi/insucare-platform",
    live: "https://insucare-platform-web.vercel.app"
  },
  {
    title: "AI Powered Resume Analyzer and Job Matcher",
    description: "AI-Powered Resume Analyzer and Job Matcher uses NLP and machine learning to extract key skills, experience, and achievements from resumes, then compares them with job descriptions to deliver accurate match scores and personalized role recommendations for faster, smarter hiring.",
    image: "resume.png",
    tech: ["React", "Tailwind CSS", "Puter.js", "Zustand"],
    github: "https://github.com/AbishakParthi/AI-Powered-Resume-Analyzer-and-Job-Matcher",
    live: "https://ai-powered-resume-analyzer-and-job-three.vercel.app"
  },
  {
    title: "Infinite Scrolling App",
    description: "An Infinite Scrolling application built using React during my internship. It fetches data from a public API and dynamically loads more content as the user scrolls. This project demonstrates API integration, efficient rendering, React hooks, and performance optimization.",
    image: "infine.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AbishakParthi/React_Intern_InfiniteScrollingApp",
    live: "https://react-intern-currency-converter-app-tawny.vercel.app"
  },
  {
    title: "Gemini Clone (AI Chat UI)",
    description: "Gemini Clone is a React-based AI chat interface that replicates conversational experiences with a sleek, interactive UI.",
    image: "gemini.jpeg",
    tech: ["React", "CSS", "Gemini API"],
    github: "https://github.com/AbishakParthi/GeminiClone",
    live: "https://gemini-clone-five-indol.vercel.app"
  },
  {
    title: "Weather App",
    description: "A React app that provides real-time weather updates and forecasts based on user location or search.",
    image: "weatherapp.jpeg",
    tech: ["React", "OpenWeatherMap API", "CSS"],
    github: "https://github.com/AbishakParthi/WeatherApp",
    live: "https://weather-app-delta-ochre-31.vercel.app"
  },
  {
    title: "Movie Search & Favorite App",
    description: "A React-based app that lets users search for movies and save their favorites for easy access.",
    image: "movie.jpeg",
    tech: ["React", "CSS", "OMDB API"],
    github: "https://github.com/AbishakParthi/MovieSearchApp",
    live: "https://movie-search-app-nine-plum.vercel.app"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#030014]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
    >
      <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center">
        {project.image.match(/\.(jpeg|jpg|gif|png|svg)$/i) ? (
          <img 
            src={`/${project.image}`} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/0 transition-colors duration-500" />
            <h3 className="text-3xl font-bold text-white/20 font-space-grotesk tracking-widest uppercase transform -rotate-12 group-hover:scale-110 group-hover:text-white/40 transition-all duration-700">
              {project.image}
            </h3>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk group-hover:text-electric-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-200">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.github} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors" target="_blank">
            <FaGithub className="w-4 h-4 mr-1" /> Code
          </a>
          <a href={project.live} className="flex items-center text-sm text-gray-300 hover:text-electric-blue transition-colors" target="_blank">
            <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
