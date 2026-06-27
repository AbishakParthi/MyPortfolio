import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Achievements } from "@/components/sections/achievements"
import { Contact } from "@/components/sections/contact"
import { GitHubStats } from "@/components/features/github-stats"

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
    </>
  );
}
