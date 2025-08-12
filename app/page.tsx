"use client"

import { useRef, useEffect } from "react"
import Header from "@/components/header"
import SectionWrapper from "@/components/section-wrapper"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section" // Re-added AboutSection
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sectionRefs = [
    { id: "home", ref: homeRef as React.RefObject<HTMLElement> },
    { id: "about", ref: aboutRef as React.RefObject<HTMLElement> },
    { id: "education", ref: educationRef as React.RefObject<HTMLElement> },
    { id: "experience", ref: experienceRef as React.RefObject<HTMLElement> },
    { id: "skills", ref: skillsRef as React.RefObject<HTMLElement> },
    { id: "contact", ref: contactRef as React.RefObject<HTMLElement> },
  ]

  // Handle anchor links when page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        const targetId = hash.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }
  }, [])

  return (
    <div className="relative">
      <Header sectionRefs={sectionRefs} />

      <section
        id="home"
        ref={homeRef}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
      >
        <HeroSection />
      </section>

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="education">
        <EducationSection />
      </SectionWrapper>

      <SectionWrapper id="experience">
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <ContactSection />
      </SectionWrapper>

      <FooterSection />
    </div>
  )
}
