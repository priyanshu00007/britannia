"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Recipes", href: "/recipes" },
    { name: "About Us", href: "/about" },
    { name: "CSR", href: "/csr" },
    { name: "Careers", href: "/careers" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-12 h-12 bg-britannia-blue rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-britannia-gold rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-britannia-blue">B</span>
              </div>
            </div>
          </motion.div>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={cn("ml-2 font-bold text-xl", isScrolled ? "text-britannia-blue" : "text-white")}
          >
            Britannia
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "font-medium hover:text-britannia-gold transition-colors",
                  isScrolled ? "text-gray-800" : "text-white",
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-gray-800" : "text-white"}
              onClick={() => setIsSearchOpen(true)}
              data-search-button
            >
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" size="icon" className={isScrolled ? "text-gray-800" : "text-white"}>
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-900">Welcome, {user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <Link href="/account/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/account">
                <Button variant="ghost" size="icon" className={isScrolled ? "text-gray-800" : "text-white"}>
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-gray-800" : "text-white"}
              onClick={() => setIsCartOpen(true)}
              data-cart-button
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-britannia-red text-white">
                    {totalItems}
                  </Badge>
                )}
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className={isScrolled ? "text-gray-800" : "text-white"}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-britannia-blue z-50 flex flex-col"
          >
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="my-4"
                >
                  <Link
                    href={item.href}
                    className="text-white text-2xl font-medium hover:text-britannia-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-8 p-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => {
                  setIsSearchOpen(true)
                  setIsMobileMenuOpen(false)
                }}
              >
                <Search className="h-6 w-6" />
              </Button>

              <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" size="icon" className="text-white">
                  <User className="h-6 w-6" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={() => {
                  setIsCartOpen(true)
                  setIsMobileMenuOpen(false)
                }}
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-britannia-red text-white">
                      {totalItems}
                    </Badge>
                  )}
                </div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
