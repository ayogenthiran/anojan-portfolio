import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Code, ExternalLink } from "lucide-react"
import { projectData } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProjectsSectionProps {
  className?: string
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center">Featured Projects</h2>
      <div className="space-y-12">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-accent/50 transition-all duration-300"
          >
            {/* Thumbnail Image */}
            <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg?height=120&width=120&query=generic-icon"}
                alt={project.title}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                {project.date && <p className="text-gray-400 text-sm sm:text-base sm:ml-4">{project.date}</p>}
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-accent text-white text-sm px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (inline) */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline font-medium"
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Code
                </Link>
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:underline font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
