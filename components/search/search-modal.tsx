"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products, recipes } from "@/lib/data"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState<"all" | "products" | "recipes">("all")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()

    let results = []

    if (activeTab === "all" || activeTab === "products") {
      const productResults = products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query),
        )
        .map((product) => ({ ...product, type: "product" }))

      if (activeTab === "all") {
        results = [...results, ...productResults.slice(0, 3)]
      } else {
        results = [...results, ...productResults]
      }
    }

    if (activeTab === "all" || activeTab === "recipes") {
      const recipeResults = recipes
        .filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.category.toLowerCase().includes(query),
        )
        .map((recipe) => ({ ...recipe, type: "recipe" }))

      if (activeTab === "all") {
        results = [...results, ...recipeResults.slice(0, 3)]
      } else {
        results = [...results, ...recipeResults]
      }
    }

    setSearchResults(results)
  }, [searchQuery, activeTab])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 max-h-[80vh] bg-white shadow-xl z-50 flex flex-col rounded-b-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for products, recipes, and more..."
                  className="pl-10 pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "all" ? "text-britannia-blue border-b-2 border-britannia-blue" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "products" ? "text-britannia-blue border-b-2 border-britannia-blue" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>
              <button
                className={`flex-1 py-2 text-sm font-medium ${
                  activeTab === "recipes" ? "text-britannia-blue border-b-2 border-britannia-blue" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("recipes")}
              >
                Recipes
              </button>
            </div>

            {/* Results */}
            <div className="overflow-y-auto flex-grow">
              {searchQuery.length < 2 ? (
                <div className="p-8 text-center text-gray-500">
                  <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-lg font-medium mb-2">Search for products and recipes</p>
                  <p className="text-sm">Type at least 2 characters to start searching</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-lg font-medium mb-2">No results found</p>
                  <p className="text-sm">Try different keywords or browse our categories</p>
                </div>
              ) : (
                <div className="p-4 divide-y">
                  {searchResults.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.type === "product" ? `/products/${result.id}` : `/recipes/${result.id}`}
                      onClick={onClose}
                    >
                      <div className="flex items-center py-3 hover:bg-gray-50 rounded-lg p-2 transition-colors">
                        <div className="relative h-16 w-16 bg-gray-100 rounded-md overflow-hidden">
                          <Image
                            src={
                              result.image ||
                              (result.type === "product"
                                ? "/placeholder.svg?height=64&width=64"
                                : "/placeholder.svg?height=64&width=64")
                            }
                            alt={result.name || result.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-xs font-medium text-gray-500 uppercase">
                                {result.type === "product" ? result.category : result.category}
                              </span>
                              <h3 className="text-sm font-medium text-gray-900">
                                {result.type === "product" ? result.name : result.title}
                              </h3>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {activeTab === "all" && searchResults.length > 0 && (
                    <div className="pt-4 text-center">
                      <Button
                        variant="link"
                        className="text-britannia-blue"
                        onClick={() => setActiveTab(searchResults[0].type === "product" ? "products" : "recipes")}
                      >
                        View all results
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
