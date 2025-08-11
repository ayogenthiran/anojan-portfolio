"use client"

import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import ProjectsSection from "@/components/projects-section"
import { useRef } from "react"

export default function ProjectsClientPage() {
  // Dummy refs for Header, as this page doesn't have all sections
  const dummyRef = useRef<HTMLDivElement>(null)
  const sectionRefs = [{ id: "dummy", ref: dummyRef }]

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header sectionRefs={sectionRefs} />
      <main className="flex-1 py-24 pt-20 px-4 max-w-4xl mx-auto w-full">
        <ProjectsSection />
      </main>
      <FooterSection />
    </div>
  )
}
