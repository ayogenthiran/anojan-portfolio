import type React from "react"
import { cn } from "@/lib/utils"

interface FooterSectionProps {
  className?: string
}

const FooterSection: React.FC<FooterSectionProps> = ({ className }) => {
  const currentYear = new Date().getFullYear()
  const name = "Anojan Yogenthiran" // Your name for copyright

  return (
    <footer className={cn("bg-background text-gray-400 py-8 text-center text-sm", className)}>
      <div className="container mx-auto px-4">
        {/* Removed social/resume links */}
        <p>
          &copy; {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
