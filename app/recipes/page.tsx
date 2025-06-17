"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, Users, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { recipes } from "@/lib/data"

export default function RecipesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Recipes" },
    { id: "desserts", name: "Desserts" },
    { id: "snacks", name: "Snacks" },
    { id: "breakfast", name: "Breakfast" },
    { id: "kids", name: "Kids Special" },
  ]

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || recipe.category.toLowerCase() === activeCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px] bg-britannia-red overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image src="/placeholder.svg?height=800&width=1920" alt="Recipes Banner" fill className="object-cover" />
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Delicious Recipes</h1>
              <p className="text-lg text-white/90 max-w-xl">
                Transform our products into amazing treats with these creative recipes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recipes Section */}
        <section ref={ref} className="py-12">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Tabs
                defaultValue="all"
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="bg-white">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Featured Recipe */}
            {filteredRecipes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl">
                    <div className="relative h-[300px] lg:h-auto">
                      <Image
                        src={filteredRecipes[0].image || "/placeholder.svg?height=800&width=800"}
                        alt={filteredRecipes[0].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-britannia-red text-white text-sm font-medium rounded-full">
                          Featured Recipe
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-sm font-medium text-britannia-gold mb-2">
                        {filteredRecipes[0].category}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{filteredRecipes[0].title}</h2>
                      <p className="text-gray-600 mb-6">{filteredRecipes[0].description}</p>

                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-britannia-red mr-2" />
                          <span>{filteredRecipes[0].time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-britannia-red mr-2" />
                          <span>{filteredRecipes[0].servings} servings</span>
                        </div>
                      </div>

                      <Link href={`/recipes/${filteredRecipes[0].id}`}>
                        <Button className="bg-britannia-red hover:bg-britannia-red/90">
                          View Recipe
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.slice(1).map((recipe, index) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/recipes/${recipe.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={recipe.image || "/placeholder.svg?height=600&width=800"}
                          alt={recipe.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-britannia-red text-white rounded-full">
                            {recipe.difficulty}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <span className="text-sm font-medium text-britannia-gold mb-1 block">{recipe.category}</span>
                      <Link href={`/recipes/${recipe.id}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-britannia-red transition-colors">
                          {recipe.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{recipe.servings} servings</span>
                        </div>
                      </div>

                      <Link href={`/recipes/${recipe.id}`}>
                        <Button variant="outline" className="w-full">
                          View Recipe
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-500">No recipes found</h3>
                  <p className="text-gray-400 mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
