"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Briefcase, Clock, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CareersPage() {
  const overviewRef = useRef(null)
  const jobsRef = useRef(null)
  const benefitsRef = useRef(null)
  const cultureRef = useRef(null)

  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 })
  const isJobsInView = useInView(jobsRef, { once: true, amount: 0.3 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const isCultureInView = useInView(cultureRef, { once: true, amount: 0.3 })

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Departments" },
    { id: "marketing", name: "Marketing" },
    { id: "engineering", name: "Engineering" },
    { id: "finance", name: "Finance" },
    { id: "hr", name: "HR" },
    { id: "operations", name: "Operations" },
  ]

  const jobs = [
    {
      id: 1,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Lead marketing campaigns for our flagship products and develop brand strategies.",
    },
    {
      id: 2,
      title: "Production Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Oversee production processes and implement efficiency improvements in our manufacturing facilities.",
    },
    {
      id: 3,
      title: "Financial Analyst",
      department: "Finance",
      location: "Delhi, India",
      type: "Full-time",
      description: "Analyze financial data and prepare reports to guide business decisions and strategy.",
    },
    {
      id: 4,
      title: "HR Specialist",
      department: "HR",
      location: "Kolkata, India",
      type: "Full-time",
      description: "Manage recruitment processes and employee relations for our growing team.",
    },
    {
      id: 5,
      title: "Supply Chain Manager",
      department: "Operations",
      location: "Chennai, India",
      type: "Full-time",
      description: "Optimize supply chain operations and ensure timely delivery of products to markets.",
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Execute digital marketing strategies across social media, email, and other online channels.",
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || job.department.toLowerCase() === activeCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const benefits = [
    { title: "Health Insurance", description: "Comprehensive health coverage for you and your family." },
    { title: "Retirement Plans", description: "Secure your future with our retirement savings plans." },
    { title: "Professional Development", description: "Continuous learning opportunities and career growth." },
    { title: "Work-Life Balance", description: "Flexible work arrangements and generous leave policies." },
    { title: "Wellness Programs", description: "Physical and mental wellness initiatives for a healthier you." },
    { title: "Employee Discounts", description: "Special discounts on Britannia products and partner services." },
  ]

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[400px] md:h-[500px] bg-britannia-gold overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/placeholder.svg?height=1000&width=1920"
            alt="Careers at Britannia"
            fill
            className="object-cover"
          />
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Team</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Be part of a dynamic team that's passionate about creating delightful food experiences for millions.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-britannia-gold hover:bg-white/90" size="lg">
                  View Open Positions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
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
                <span className="inline-block px-4 py-1 rounded-full text-britannia-gold text-sm font-medium mb-4 bg-britannia-gold/10">
                  Why Britannia
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Grow With Us</h2>
                <p className="text-gray-600 mb-6">
                  At Britannia, we believe that our people are our greatest asset. We foster a culture of innovation,
                  collaboration, and continuous learning where every employee has the opportunity to grow and make an
                  impact.
                </p>
                <p className="text-gray-600 mb-6">
                  With a legacy spanning over a century, we offer a unique blend of stability and innovation. Our teams
                  work on exciting challenges, from developing new products to implementing cutting-edge technologies in
                  our operations.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're just starting your career or looking for your next challenge, Britannia offers diverse
                  opportunities across functions and geographies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="Britannia Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section ref={jobsRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-britannia-blue text-sm font-medium mb-4 bg-britannia-blue/10">
                Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore current opportunities to join our team and be part of our exciting journey.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search positions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">Filter:</span>
                <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                  <TabsList className="bg-white">
                    {categories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id}>
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </motion.div>

            {/* Jobs List */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Link href={`/careers/${job.id}`}>
                          <Button className="bg-britannia-blue hover:bg-britannia-blue/90">Apply Now</Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                  <h3 className="text-xl font-medium text-gray-500">No positions found</h3>
                  <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isJobsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Link href="/careers/apply">
                <Button
                  variant="outline"
                  className="border-britannia-blue text-britannia-blue hover:bg-britannia-blue hover:text-white"
                >
                  Submit Your Resume
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-britannia-red text-sm font-medium mb-4 bg-britannia-red/10">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We value our employees and offer a comprehensive benefits package to support their wellbeing and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section ref={cultureRef} className="py-20 bg-britannia-gold/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isCultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full text-britannia-gold text-sm font-medium mb-4 bg-britannia-gold/10">
                  Our Culture
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Life at Britannia</h2>
                <p className="text-gray-600 mb-6">
                  At Britannia, we foster a culture of innovation, collaboration, and excellence. Our diverse teams work
                  together in an environment that encourages creativity and continuous learning.
                </p>
                <p className="text-gray-600 mb-6">
                  We celebrate achievements, promote work-life balance, and create opportunities for personal and
                  professional growth. Our employees are passionate about making a difference and take pride in being
                  part of a company that touches millions of lives every day.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/careers/culture">
                    <Button className="bg-britannia-gold hover:bg-britannia-gold/90">
                      Explore Our Culture
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/careers/testimonials">
                    <Button variant="outline">Employee Stories</Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isCultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Team Collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=500&width=400"
                      alt="Office Environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                    <Image src="/placeholder.svg?height=500&width=400" alt="Team Event" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Employee Recognition"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
