"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Taste the Tradition",
      subtitle: "Britannia's Classic Biscuits",
      description:
        "Enjoy the perfect blend of taste and tradition with our iconic biscuits that have delighted generations.",
      image: "",
      color: "bg-britannia-blue",
    },
    {
      title: "Baked with Love",
      subtitle: "Premium Quality Ingredients",
      description: "Every bite is crafted with care using the finest ingredients for a truly delightful experience.",
      image: "",
      color: "bg-britannia-gold",
    },
    {
      title: "Discover New Flavors",
      subtitle: "Innovative Recipes",
      description: "Experience our latest creations that combine traditional goodness with exciting new flavors.",
      image: "/placeholder.svg?height=1080&width=1920",
      color: "bg-britannia-red",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 10 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                y: currentSlide === index ? 0 : 50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span
                className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4 ${slide.color}`}
              >
                {slide.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">{slide.title}</h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-britannia-gold hover:bg-britannia-gold/90 text-white">
                  Explore Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white bg-black border-white hover:bg-white/10">
                  View Recipes
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
