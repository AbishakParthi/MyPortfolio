"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { BookOpen, Users, UserPlus, Star } from "lucide-react"

export function GitHubStats() {
  const [data, setData] = React.useState({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0,
    loading: true
  })

  React.useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/AbishakParthi")
        const userData = await userRes.json()
        
        const reposRes = await fetch("https://api.github.com/users/AbishakParthi/repos?per_page=100")
        const reposData = await reposRes.json()
        
        let totalStars = 0;
        if (Array.isArray(reposData)) {
          totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
        }

        setData({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          stars: totalStars,
          loading: false
        })
      } catch (err) {
        console.error("Failed to fetch GitHub stats", err)
        setData(prev => ({ ...prev, loading: false }))
      }
    }
    
    fetchStats()
  }, [])

  const stats = [
    { label: "Public Repos", value: data.loading ? "..." : data.repos, icon: <BookOpen className="w-5 h-5 text-electric-blue" /> },
    { label: "Followers", value: data.loading ? "..." : data.followers, icon: <Users className="w-5 h-5 text-purple-400" /> },
    { label: "Following", value: data.loading ? "..." : data.following, icon: <UserPlus className="w-5 h-5 text-cyan-400" /> },
    { label: "Stars Earned", value: data.loading ? "..." : data.stars, icon: <Star className="w-5 h-5 text-yellow-400" /> },
  ]

  return (
    <section className="py-24 relative bg-[#030014]/50 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="GitHub Activity" subtitle="A snapshot of my coding journey, personal projects, and continuous learning through GitHub." />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="flex flex-col items-center text-center py-8">
                <div className="p-3 bg-white/5 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold font-space-grotesk text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {/* Real Contribution Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 glass-card overflow-x-auto flex flex-col items-center justify-center"
        >
          <div className="min-w-[700px] w-full flex justify-center bg-white/5 p-4 rounded-xl border border-white/10">
            <img 
              src="https://ghchart.rshah.org/8b5cf6/AbishakParthi" 
              alt="Abishake's GitHub Activity Graph" 
              className="w-full max-w-4xl opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-mono">Live GitHub contributions for AbishakParthi</p>
        </motion.div>
      </div>
    </section>
  )
}
