"use client"

import React from "react"
import Link from "next/link"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import { BlogPost } from "@/lib/data"
import { Brain, BookText, Lightbulb, Rocket, FileText } from 'lucide-react'
import { useRef } from "react"

interface BlogClientPageProps {
  posts: BlogPost[]
}

const iconMap: { [key: string]: any } = {
  Brain,
  BookText,
  Lightbulb,
  Rocket,
  FileText,
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
  const dummyRef = useRef<HTMLDivElement>(null)
  const sectionRefs = [{ id: "dummy", ref: dummyRef }]

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header sectionRefs={sectionRefs} />
      <main className="flex-1 py-24 pt-32 px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">My Blog</h1>

        <div className="space-y-8">
          {posts.map((article, index) => (
            <div key={index} className="pb-8 border-b border-gray-800 last:border-b-0">
              <div className="flex items-start gap-4 mb-3">
                {article.icon && iconMap[article.icon] && React.createElement(iconMap[article.icon], { className: "h-6 w-6 text-accent flex-shrink-0 mt-1" })}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <Link
                      href={`/blog/${article.id}`}
                      className="text-xl md:text-2xl font-semibold text-foreground hover:text-accent transition-colors leading-tight"
                    >
                      {article.title}
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base sm:ml-4 flex-shrink-0">{article.date}</p>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mb-3">
                    {article.excerpt} <span className="text-gray-500">({article.readingTime})</span>
                  </p>
                  {/* Tags section is removed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
