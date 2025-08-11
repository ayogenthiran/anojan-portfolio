"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className }) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  // This component will manage its own fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("opacity-0")
            observer.unobserve(entry.target) // Stop observing once animated
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      sectionRef.current.classList.add("opacity-0") // Start invisible
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id={id} ref={sectionRef} className={cn("py-16 md:py-24 px-4 max-w-4xl mx-auto", className)}>
      {children}
    </section>
  )
}

export default SectionWrapper
