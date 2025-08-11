"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface Section {
  id: string
  ref: React.RefObject<HTMLElement>
}

export const useScrollSpy = (sectionRefs: Section[], options?: IntersectionObserverInit) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.id
          const targetElement = document.getElementById(targetId)

          if (entry.isIntersecting) {
            setActiveSection(targetId)
            if (targetElement) {
              targetElement.classList.add("animate-fade-in")
              targetElement.classList.remove("opacity-0")
            }
          } else {
            // Optional: remove fade-in class if section scrolls out of view
            // if (targetElement) {
            //   targetElement.classList.remove('animate-fade-in');
            //   targetElement.classList.add('opacity-0');
            // }
          }
        })
      },
      {
        root: null, // viewport
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is roughly in the middle of the viewport
        threshold: 0, // No threshold needed as rootMargin handles it
        ...options,
      },
    )

    observerRef.current = observer

    sectionRefs.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current)
        // Initialize sections as invisible
        section.ref.current.classList.add("opacity-0")
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sectionRefs, options])

  return activeSection
}
