import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillsData } from "@/lib/data"
import { cn } from "@/lib/utils"

interface SkillsSectionProps {
  className?: string
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">Technical Skills</h2>
      <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
        Comprehensive expertise across the AI/ML technology stack
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-700 hover:border-accent/50 transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <category.icon className="h-8 w-8 text-accent" />
              <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 pt-0">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
