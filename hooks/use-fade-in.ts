"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

interface FadeInResult {
  ref: RefObject<HTMLDivElement | null>
  visibleClass: string
}

export function useFadeIn(threshold = 0.1): FadeInResult {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const visibleClass = isVisible ? "visible" : ""

  return { ref, visibleClass }
}
