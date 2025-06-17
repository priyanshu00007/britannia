"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 360)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-britannia-blue z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-32 h-32 bg-britannia-gold rounded-full mb-8 flex items-center justify-center"
          animate={{
            rotate: rotation,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <div className="w-24 h-24 bg-britannia-red rounded-full flex items-center justify-center text-white font-bold">
            <span className="text-xs">Britannia</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-white text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Good Food, Good Life
        </motion.h1>
      </div>
    </motion.div>
  )
}
