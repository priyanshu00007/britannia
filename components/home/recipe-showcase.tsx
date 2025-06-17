"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, ChevronRight } from "lucide-react"

export default function RecipeShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const recipes = [
    {
      id: 1,
      title: "Bourbon Chocolate Trifle",
      description: "A decadent dessert made with layers of Bourbon biscuits, chocolate pudding, and whipped cream.",
      image: "/placeholder.svg?height=600&width=800",
      time: "30 min",
      servings: 4,
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Marie Gold Cheesecake",
      description: "A no-bake cheesecake with a Marie Gold biscuit base and a creamy vanilla topping.",
      image: "/placeholder.svg?height=600&width=800",
      time: "45 min",
      servings: 6,
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Good Day Cookie Ice Cream",
      description: "Homemade vanilla ice cream with chunks of Good Day cookies for added crunch and flavor.",
      image: "/placeholder.svg?height=600&width=800",
      time: "60 min",
      servings: 8,
      difficulty: "Medium",
    },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delicious Recipes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform our biscuits into amazing desserts with these creative recipes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={recipe.image || "/placeholder.svg"}
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

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>

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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/recipes">
            <Button className="bg-britannia-red hover:bg-britannia-red/90">
              Explore All Recipes
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
