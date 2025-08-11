"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { socialLinks } from "@/lib/data"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface HeaderProps {
  sectionRefs: { id: string; ref: React.RefObject<HTMLElement> }[]
}

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(sectionRefs)
  const pathname = usePathname()

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "/projects" }, // Changed to a direct link to /projects page
    { name: "Blog", href: "/blog" },
  ]

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // If it's an internal section link, handle smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false) // Close menu on link click
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-90 backdrop-blur-sm border-b border-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A79D] hover:text-[#00A79D]/80 transition-colors tracking-tight"
          onClick={(e) => handleNavLinkClick(e, "#home")}
        >
          Anojan Yogenthiran
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-foreground hover:text-accent transition-colors text-lg md:text-xl font-medium tracking-wide",
                // Only highlight if it's a section on the current page
                link.href.startsWith("#") && activeSection === link.href.substring(1) && "text-accent font-semibold",
                // Highlight blog/projects link if on their respective pages
                ((link.name === "Blog" && pathname === "/blog") ||
                  (link.name === "Projects" && pathname === "/projects")) &&
                  "text-accent font-semibold",
              )}
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#00A79D] hover:bg-[#00A79D]/80 text-white px-8 py-3 rounded-lg text-lg md:text-xl font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>
              Contact
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-accent"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-40">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-foreground hover:text-accent"
            aria-label="Close navigation menu"
          >
            <X className="h-8 w-8" />
          </Button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-foreground text-3xl md:text-4xl font-semibold hover:text-accent transition-colors tracking-wide",
                link.href.startsWith("#") && activeSection === link.href.substring(1) && "text-accent",
                ((link.name === "Blog" && pathname === "/blog") ||
                  (link.name === "Projects" && pathname === "/projects")) &&
                  "text-accent",
              )}
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#00A79D] hover:bg-[#00A79D]/80 text-white px-10 py-5 rounded-lg text-2xl md:text-3xl font-semibold tracking-wide shadow-lg">
            <Link href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>
              Contact
            </Link>
          </Button>
          <div className="flex space-x-6 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
