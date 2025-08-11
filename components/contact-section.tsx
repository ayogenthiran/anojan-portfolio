"use client" // This component needs to be a client component for form interactivity

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ContactSectionProps {
  className?: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted!")
    // You might want to add a success message or clear the form
  }

  return (
    <div className={cn("text-foreground text-center py-16 md:py-24", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Contact Me</h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Feel free to reach out if you'd like to discuss opportunities, have a quick coffee chat, or just say hi! I'm
        always looking forward to meeting new people.
      </p>

      {/* Removed Profile Picture */}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 px-4">
        <div className="text-left">
          <label htmlFor="fullName" className="block text-lg font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
          />
        </div>
        <div className="text-left">
          <label htmlFor="emailAddress" className="block text-lg font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <Input
            id="emailAddress"
            type="email"
            placeholder="example@domain.com"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
          />
        </div>
        <div className="text-left">
          <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Type your message"
            rows={5}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-accent hover:bg-accent/80 text-white rounded-md transition-colors duration-300 ease-in-out"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactSection
