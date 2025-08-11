import type React from "react"
import Link from "next/link"
import { blogData } from "@/lib/data"
import { cn } from "@/lib/utils"

interface BlogSectionProps {
  className?: string
}

const BlogSection: React.FC<BlogSectionProps> = ({ className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">My Blog</h2>
      <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
        Insights and thoughts on AI/ML, technology, and more.
      </p>
      <div className="space-y-8">
        {blogData.map((article, index) => (
          <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
            <div className="flex items-start gap-4 mb-3">
              {article.icon && <article.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />}{" "}
              {/* Render specific icon */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-semibold text-foreground hover:text-accent transition-colors leading-tight"
                  >
                    {article.title}
                  </Link>
                  <p className="text-gray-400 text-sm sm:text-base sm:ml-4 flex-shrink-0">{article.date}</p>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-3">
                  {article.excerpt} <span className="text-gray-500">({article.readingTime})</span>
                </p>
                {/* Removed Tags section */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
