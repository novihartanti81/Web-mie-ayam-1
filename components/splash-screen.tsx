"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#2C1A12] via-[#B1342E] to-[#F7C04A]"
    >
      <div className="relative">
        {/* Logo with animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-64 h-64"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picsart_25-11-03_19-33-32-773-ah2cNbm0xS8FeXwwHPeP94rjZ0sqKX.png"
            alt="Mie Ayam Icoy Jakarta"
            fill
            className="object-contain drop-shadow-2xl"
          />

          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(247, 192, 74, 0.3)",
                "0 0 40px rgba(247, 192, 74, 0.6)",
                "0 0 20px rgba(247, 192, 74, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-full"
          />
        </motion.div>

        {/* Text animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8"
        >
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">Mie Ayam Icoy</h1>
          <p className="text-amber-100 text-sm mt-2">Jakarta</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
