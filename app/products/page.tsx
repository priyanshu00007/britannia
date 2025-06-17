"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/products/product-card"
import { useCart } from "@/components/cart/cart-provider"
import { products } from "@/lib/data"

export default function ProductsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const { addToCart } = useCart()

  const categories = [
    { id: "all", name: "All Products" },
    { id: "biscuits", name: "Biscuits" },
    { id: "cookies", name: "Cookies" },
    { id: "cakes", name: "Cakes" },
    { id: "bread", name: "Bread" },
    { id: "dairy", name: "Dairy" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || product.category.toLowerCase() === activeCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px] bg-britannia-blue overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image src="/placeholder.svg?height=800&width=1920" alt="Products Banner" fill className="object-cover" />
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
              <p className="text-lg text-white/90 max-w-xl">
                Discover our wide range of delicious biscuits, cookies, cakes, and more that have delighted generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section ref={ref} className="py-12 bg-gray-50">
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
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} onAddToCart={() => addToCart(product)} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-500">No products found</h3>
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
