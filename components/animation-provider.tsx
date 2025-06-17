"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingAnimation from "@/components/loading-animation"

type AnimationContextType = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  hasSeenIntro: boolean
  setHasSeenIntro: (seen: boolean) => void
}

const AnimationContext = createContext<AnimationContextType>({
  isLoading: true,
  setIsLoading: () => {},
  hasSeenIntro: false,
  setHasSeenIntro: () => {},
})

export const useAnimation = () => useContext(AnimationContext)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasSeenIntro, setHasSeenIntro] = useState(false)

  useEffect(() => {
    // Check if user has seen intro animation in this session
    const hasSeenIntroSession = sessionStorage.getItem("hasSeenIntro")

    if (hasSeenIntroSession) {
      setIsLoading(false)
      setHasSeenIntro(true)
    } else {
      // Show loading animation for 4 seconds
      const timer = setTimeout(() => {
        setIsLoading(false)
        setHasSeenIntro(true)
        sessionStorage.setItem("hasSeenIntro", "true")
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimationContext.Provider value={{ isLoading, setIsLoading, hasSeenIntro, setHasSeenIntro }}>
      <AnimatePresence mode="wait">{isLoading ? <LoadingAnimation key="loading" /> : children}</AnimatePresence>
    </AnimationContext.Provider>
  )
}
