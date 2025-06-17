"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isBestSeller?: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    onAddToCart()
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
      duration: 3000,
    })
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-64 bg-gray-100 overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src={product.image || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </div>
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-britannia-blue text-white">New</Badge>}
          {product.isBestSeller && <Badge className="bg-britannia-gold text-white">Best Seller</Badge>}
        </div>

        {/* Wishlist button */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute top-3 right-3 rounded-full bg-white ${isWishlisted ? "text-red-500" : "text-gray-400"}`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <span className="text-xs font-medium text-gray-500 uppercase">{product.category}</span>
          <Link href={`/products/${product.id}`}>
            <h3 className="text-lg font-bold text-gray-900 mt-1 hover:text-britannia-blue transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-britannia-red hover:bg-britannia-red/90" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
