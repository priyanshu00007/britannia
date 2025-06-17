"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-britannia-blue/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full text-britannia-blue text-sm font-medium mb-4 bg-britannia-blue/10">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Century of Delighting Generations</h2>
            <p className="text-gray-600 mb-6">
              Since 1892, Britannia has been a part of India's rich culinary heritage. What started as a small biscuit
              company in Kolkata has grown into one of the country's most trusted food brands, bringing joy to millions
              of homes every day.
            </p>
            <p className="text-gray-600 mb-8">
              Our journey has been guided by a simple philosophy: to create delicious, high-quality products that bring
              families together. Through innovation and a deep understanding of consumer tastes, we've continued to
              evolve while staying true to our roots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button className="bg-britannia-blue hover:bg-britannia-blue/90">
                  Our Story
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/csr">
                <Button variant="outline">CSR Initiatives</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Britannia Heritage"
                fill
                className="object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              >
                <span className="text-white/80 block mb-2">Established</span>
                <h3 className="text-3xl font-bold text-white">1892</h3>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-[200px]"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2">100+ Years</h4>
              <p className="text-gray-600 text-sm">Of bringing smiles to millions of faces across India</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
