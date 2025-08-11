import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react" // Removed Award import
import { educationData } from "@/lib/data"
import { cn } from "@/lib/utils"

interface EducationSectionProps {
  className?: string
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-700 hover:border-accent/50 transition-all duration-300 p-6 md:p-8"
          >
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={edu.logo || "/placeholder.svg?height=80&width=80"}
                      alt={`${edu.institution} logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    {edu.specialization && ( // Conditionally render specialization and GPA inline
                      <p className="text-lg md:text-xl text-[#00A79D] font-semibold mb-2">
                        {edu.specialization}
                        {edu.gpa && <span className="text-accent"> • GPA: {edu.gpa}</span>}
                      </p>
                    )}
                    <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-1">{edu.institution}</h4>
                    <p className="text-gray-400 mb-3">{edu.location}</p>

                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.dates}</span>
                      </div>
                    </div>
                    {edu.thesis && ( // Research moved below dates
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Research: {edu.thesis}</span>
                      </div>
                    )}
                    {/* Removed Awards rendering */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EducationSection
