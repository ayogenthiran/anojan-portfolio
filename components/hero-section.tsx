"use client"

import type React from "react"
import { socialLinks } from "@/lib/data"
import TypingEffect from "./typing-effect"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground text-center", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent leading-tight mb-4">
        <TypingEffect text="AI/ML Software Engineer" speed={70} delay={1000} />
      </h1>
      <p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
        style={{ animationDelay: "2.5s" }}
      >
        Self-driven, quick starter, passionate AI/ML Engineer with a curious mind who enjoys solving complex and
        challenging real-world problems.
      </p>
      <div className="flex justify-center space-x-6 md:space-x-8 animate-fade-in" style={{ animationDelay: "3.5s" }}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
            aria-label={link.name}
            {...(link.name === "Resume" && { download: true })} // Add download attribute for Resume link
          >
            <link.icon className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
