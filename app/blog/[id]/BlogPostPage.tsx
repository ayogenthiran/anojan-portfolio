"use client"

import React from "react"
import { Brain, BookText, Lightbulb, Rocket, FileText } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import { BlogPost } from "@/lib/data"
import { useRef } from "react"

const iconMap: { [key: string]: any } = {
  Brain,
  BookText,
  Lightbulb,
  Rocket,
  FileText,
}

interface BlogPostPageProps {
  post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const dummyRef = useRef<HTMLDivElement>(null)
  const sectionRefs = [{ id: "dummy", ref: dummyRef }]

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header sectionRefs={sectionRefs} />
      <main className="flex-1 py-24 pt-32 px-4 max-w-4xl mx-auto w-full">
        {/* Article header */}
        <article className="prose prose-invert max-w-none">
          <div className="flex items-start gap-4 mb-8 mt-4">
            {post.icon && iconMap[post.icon] && React.createElement(iconMap[post.icon], { className: "h-8 w-8 text-accent flex-shrink-0 mt-1" })}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none blog-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Custom styling for headings
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold text-accent mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 mt-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 mt-5">
                    {children}
                  </h3>
                ),
                // Custom styling for paragraphs
                p: ({ children }) => (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                // Custom styling for lists
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300">
                    {children}
                  </li>
                ),
                // Custom styling for tables
                table: ({ children }) => (
                  <div className="overflow-x-auto">
                    <table>
                      {children}
                    </table>
                  </div>
                ),
                // Custom styling for code blocks
                code: ({ children, className }) => {
                  const isInline = !className
                  if (isInline) {
                    return <code>{children}</code>
                  }
                  return <code className={className}>{children}</code>
                },
                // Custom styling for links
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    className="text-accent hover:text-accent/80 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                // Custom styling for blockquotes
                blockquote: ({ children }) => (
                  <blockquote>
                    {children}
                  </blockquote>
                ),
                // Custom styling for images (handles both Markdown and HTML images)
                img: ({ src, alt, style, ...props }) => {
                  // Check if this is a standalone image (likely from HTML)
                  const isStandalone = props.className || style
                  
                  if (isStandalone) {
                    return (
                      <img 
                        src={src} 
                        alt={alt} 
                        style={style}
                        className="max-w-full h-auto mx-auto"
                        {...props}
                      />
                    )
                  }
                  
                  // Default Markdown image with caption
                  return (
                    <div className="text-center">
                      <img 
                        src={src} 
                        alt={alt} 
                        className="max-w-full h-auto mx-auto"
                      />
                      {alt && (
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {alt}
                        </p>
                      )}
                    </div>
                  )
                },
                // Custom styling for strong/bold text
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
                // Custom styling for emphasis/italic text
                em: ({ children }) => (
                  <em className="italic text-gray-300">
                    {children}
                  </em>
                ),
                // Custom styling for HTML div elements
                div: ({ children, className, style, ...props }) => (
                  <div className={className} style={style} {...props}>
                    {children}
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  )
}
