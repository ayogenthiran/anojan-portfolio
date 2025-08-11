import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AboutSectionProps {
  className?: string
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center">About Me</h2>
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 max-w-6xl mx-auto">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mx-auto lg:mx-0 lg:ml-0">
          <div className="relative">
                         <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-[#00A79D] overflow-hidden bg-gray-800 flex items-center justify-center shadow-2xl">
              <Image
                src="/Anojan_profile.jpg"
                alt="Anojan Yogenthiran - AI/ML Engineer"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1 space-y-8 text-lg md:text-xl leading-relaxed lg:pt-4">
          <p className="text-justify">
            I'm an experienced Machine Learning Engineer with a Master's in Computer Science from Western University, 
            specializing in Artificial Intelligence. Over the past 3+ years, I've developed and deployed AI-driven 
            solutions across research, healthcare, and IoT—blending technical expertise with a passion for solving 
            complex, real-world problems.
          </p>
          <p className="text-justify">
            As a Research Assistant at the Intelligence Data Science Lab, I had the opportunity to work under the 
            guidance of{" "}
            <a 
              href="https://a-narayan.github.io/#/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00A79D] hover:text-[#00A79D]/80 transition-colors duration-200"
            >
              Dr. Apurva Narayan
            </a>
            , focusing on generative AI research to accelerate drug discovery by identifying optimal aptamers. 
            I'm driven by the mission to craft AI solutions that not only tackle challenges but also create a 
            positive impact on millions of lives.
          </p>
          <p className="text-justify">
            Outside of work, I enjoy staying active and creative—whether it's playing soccer, hiking scenic trails, 
            experimenting with new recipes, hitting the gym, or watching anime (⚽, ⛰️, 🍜, 🎌, 🏋️).
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
