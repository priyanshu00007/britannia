"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CSRPage() {
  const overviewRef = useRef(null)
  const initiativesRef = useRef(null)
  const impactRef = useRef(null)
  const partnersRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isInitiativesInView = useInView(initiativesRef, { once: true, amount: 0.3 })
  const isImpactInView = useInView(impactRef, { once: true, amount: 0.3 })
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.3 })

  const initiatives = [
    {
      title: "Britannia Nutrition Foundation",
      description: "Working to address malnutrition among children through education and nutrition interventions.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/csr/nutrition-foundation",
    },
    {
      title: "Sustainable Sourcing",
      description: "Implementing sustainable practices in our supply chain to reduce environmental impact.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/csr/sustainable-sourcing",
    },
    {
      title: "Community Development",
      description: "Supporting local communities through education, healthcare, and infrastructure projects.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/csr/community-development",
    },
    {
      title: "Environmental Conservation",
      description: "Reducing our carbon footprint and promoting environmental conservation initiatives.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/csr/environmental-conservation",
    },
  ]

  const impactStats = [
    { number: "1M+", label: "Children Reached", color: "bg-britannia-blue" },
    { number: "500+", label: "Schools Supported", color: "bg-britannia-gold" },
    { number: "30%", label: "Carbon Footprint Reduction", color: "bg-britannia-red" },
    { number: "100+", label: "Community Projects", color: "bg-green-600" },
  ]

  const partners = [
    { name: "UNICEF", logo: "/placeholder.svg?height=200&width=200" },
    { name: "World Food Programme", logo: "/placeholder.svg?height=200&width=200" },
    { name: "Save the Children", logo: "/placeholder.svg?height=200&width=200" },
    { name: "Akshaya Patra", logo: "/placeholder.svg?height=200&width=200" },
    { name: "CRY", logo: "/placeholder.svg?height=200&width=200" },
    { name: "WWF", logo: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[400px] md:h-[500px] bg-green-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image src="/placeholder.svg?height=1000&width=1920" alt="CSR Initiatives" fill className="object-cover" />
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Corporate Social Responsibility
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                At Britannia, we believe in giving back to society and making a positive impact on communities and the
                environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section ref={overviewRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full text-green-600 text-sm font-medium mb-4 bg-green-600/10">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CSR Overview</h2>
                <p className="text-gray-600 mb-6">
                  Britannia's Corporate Social Responsibility (CSR) initiatives are focused on creating sustainable
                  impact in the areas of nutrition, education, community development, and environmental conservation.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that businesses have a responsibility to contribute positively to society and the
                  environment. Our CSR strategy is aligned with our business values and leverages our strengths to
                  address social challenges.
                </p>
                <p className="text-gray-600 mb-6">
                  Through strategic partnerships with NGOs, government bodies, and other stakeholders, we implement
                  programs that create meaningful and lasting change in the communities we serve.
                </p>
                <Link href="/csr/reports">
                  <Button className="bg-green-600 hover:bg-green-700">
                    View CSR Reports
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="CSR Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section ref={initiativesRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInitiativesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-green-600 text-sm font-medium mb-4 bg-green-600/10">
                Making a Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our CSR initiatives focus on creating sustainable impact in areas where we can make the most difference.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInitiativesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <Link href={initiative.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section ref={impactRef} className="py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isImpactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4 bg-white/20">
                Our Achievements
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Through our CSR initiatives, we have made a significant impact on communities and the environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isImpactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 text-center shadow-md"
                >
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-2xl font-bold">{stat.number.charAt(0)}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isImpactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/csr/impact-stories">
                <Button className="bg-white text-green-600 hover:bg-white/90">
                  Read Impact Stories
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section ref={partnersRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-green-600 text-sm font-medium mb-4 bg-green-600/10">
                Collaborations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with various organizations to maximize the impact of our CSR initiatives.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Partner With Us
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
