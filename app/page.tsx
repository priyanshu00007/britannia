"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useCart } from "@/components/cart/cart-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturedProducts from "@/components/home/featured-products"
import RecipeShowcase from "@/components/home/recipe-showcase"
import BrandStory from "@/components/home/brand-story"
import CartDrawer from "@/components/cart/cart-drawer"
import SearchModal from "@/components/search/search-modal"

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isCartOpen, setIsCartOpen } = useCart()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Update Header component to use these functions
  useEffect(() => {
    const searchButton = document.querySelector("[data-search-button]")
    const cartButton = document.querySelector("[data-cart-button]")

    if (searchButton) {
      searchButton.addEventListener("click", () => setIsSearchOpen(true))
    }

    if (cartButton) {
      cartButton.addEventListener("click", () => setIsCartOpen(true))
    }

    return () => {
      if (searchButton) {
        searchButton.removeEventListener("click", () => setIsSearchOpen(true))
      }

      if (cartButton) {
        cartButton.removeEventListener("click", () => setIsCartOpen(true))
      }
    }
  }, [setIsCartOpen])

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeaturedProducts />
        </motion.div>

        <motion.div variants={itemVariants}>
          <RecipeShowcase />
        </motion.div>

        <motion.div variants={itemVariants}>
          <BrandStory />
        </motion.div>
      </main>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </motion.div>
  )
}
