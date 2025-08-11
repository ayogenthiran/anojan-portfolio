"use client"

import { useRef } from "react"
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
  const aboutRef = useRef<HTMLDivElement>(null) // Re-added ref for AboutSection
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sectionRefs = [
    { id: "home", ref: homeRef },
    { id: "about", ref: aboutRef }, // Re-added AboutSection to refs
    { id: "education", ref: educationRef },
    { id: "experience", ref: experienceRef },
    { id: "skills", ref: skillsRef },
    { id: "contact", ref: contactRef },
  ]

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

      <SectionWrapper id="about" ref={aboutRef}>
        {" "}
        {/* Re-added AboutSection */}
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="education" ref={educationRef}>
        <EducationSection />
      </SectionWrapper>

      <SectionWrapper id="experience" ref={experienceRef}>
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper id="skills" ref={skillsRef}>
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="contact" ref={contactRef}>
        <ContactSection />
      </SectionWrapper>

      <FooterSection />
    </div>
  )
}
