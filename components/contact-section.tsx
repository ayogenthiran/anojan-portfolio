"use client" // This component needs to be a client component for form interactivity

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { EMAILJS_CONFIG, type EmailTemplateParams } from "@/lib/emailjs-config"

interface ContactSectionProps {
  className?: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const templateParams: EmailTemplateParams = {
        from_name: formData.fullName,
        from_email: formData.emailAddress,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setSubmitStatus("success")
      setFormData({ fullName: "", emailAddress: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus("error")
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={cn("text-foreground text-center py-16 md:py-24", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Contact Me</h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Feel free to reach out if you'd like to discuss opportunities, have a quick coffee chat, or just say hi! I'm
        always looking forward to meeting new people.
      </p>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="max-w-xl mx-auto mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-md">
          <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="max-w-xl mx-auto mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-md">
          <p className="text-red-400 font-medium">Failed to send message. Please try again or contact me directly at ayogenth@uwo.ca</p>
        </div>
      )}

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
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
            disabled={isSubmitting}
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
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
            disabled={isSubmitting}
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
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-foreground placeholder:text-gray-500 focus:border-accent focus:ring-accent"
            required
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-accent hover:bg-accent/80 text-white rounded-md transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  )
}

export default ContactSection
