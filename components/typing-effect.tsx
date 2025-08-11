"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number // milliseconds per character
  delay?: number // delay before starting typing
  className?: string
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, delay = 500, className }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }
    }, speed)

    return () => clearTimeout(timeoutId)
  }, [currentIndex, text, speed])

  return <span className={className}>{displayedText}</span>
}

export default TypingEffect
