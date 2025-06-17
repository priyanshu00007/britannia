"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const missionRef = useRef(null)
  const historyRef = useRef(null)
  const leadershipRef = useRef(null)
  const valuesRef = useRef(null)

  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const isHistoryInView = useInView(historyRef, { once: true, amount: 0.3 })
  const isLeadershipInView = useInView(leadershipRef, { once: true, amount: 0.3 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 })

  const milestones = [
    {
      year: 1892,
      title: "Foundation",
      description: "Britannia was established in Kolkata (then Calcutta) with an investment of ₹295.",
    },
    { year: 1924, title: "First Factory", description: "The first Britannia factory was established in Mumbai." },
    {
      year: 1939,
      title: "Iconic Biscuits",
      description: "Launched the iconic Marie Gold biscuits that would become a household name.",
    },
    {
      year: 1997,
      title: "Joint Venture",
      description: "Formed a joint venture with Groupe Danone, a global food company.",
    },
    { year: 2009, title: "Expansion", description: "Expanded product portfolio to include dairy products and cakes." },
    { year: 2018, title: "Innovation", description: "Launched innovative products focusing on health and nutrition." },
  ]

  const leaders = [
    { name: "Varun Berry", position: "Managing Director", image: "/placeholder.svg?height=400&width=400" },
    { name: "N. Venkataraman", position: "Chief Financial Officer", image: "/placeholder.svg?height=400&width=400" },
    { name: "Amit Doshi", position: "Chief Marketing Officer", image: "/placeholder.svg?height=400&width=400" },
    { name: "Ritesh Rana", position: "Head of HR", image: "/placeholder.svg?height=400&width=400" },
  ]

  const values = [
    {
      title: "Quality",
      description: "We are committed to delivering products of the highest quality and safety standards.",
    },
    { title: "Innovation", description: "We constantly innovate to create products that delight our consumers." },
    { title: "Integrity", description: "We conduct our business with honesty, transparency, and ethical practices." },
    { title: "Consumer Focus", description: "We put our consumers at the center of everything we do." },
  ]

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[400px] md:h-[500px] bg-britannia-blue overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image src="/placeholder.svg?height=1000&width=1920" alt="About Britannia" fill className="object-cover" />
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Story</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                For over a century, Britannia has been delighting generations with delicious, high-quality bakery
                products that have become a part of India's culinary heritage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full text-britannia-blue text-sm font-medium mb-4 bg-britannia-blue/10">
                  Our Purpose
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
                <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                  <h3 className="text-xl font-bold text-britannia-blue mb-3">Our Mission</h3>
                  <p className="text-gray-600 mb-4">
                    To be a leading food company that creates innovative products to satisfy the nutritional needs and
                    gastronomic pleasure of consumers of all ages.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-britannia-gold mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a global food company, providing delightful and trusted food products which help people eat
                    better every day.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="Britannia Mission"
                    fill
                    className="object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-[200px]"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">130+ Years</h4>
                  <p className="text-gray-600 text-sm">Of excellence and innovation in the food industry</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History & Milestones */}
        <section ref={historyRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-britannia-gold text-sm font-medium mb-4 bg-britannia-gold/10">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">History & Milestones</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming one of India's most iconic food brands, our journey has been one of
                continuous innovation and growth.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-britannia-blue/20 z-0"></div>

              {/* Milestones */}
              <div className="relative z-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <span className="text-britannia-blue font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>

                    <div className="relative">
                      <div className="w-6 h-6 bg-white rounded-full border-4 border-britannia-blue"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section ref={leadershipRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-britannia-red text-sm font-medium mb-4 bg-britannia-red/10">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the team that drives our vision and leads Britannia towards continued excellence and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-gray-600">{leader.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-20 bg-britannia-blue/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-britannia-blue text-sm font-medium mb-4 bg-britannia-blue/10">
                Our Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These values guide our actions and decisions, shaping our culture and defining who we are as a company.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-britannia-blue mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/careers">
                <Button className="bg-britannia-blue hover:bg-britannia-blue/90">
                  Join Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
