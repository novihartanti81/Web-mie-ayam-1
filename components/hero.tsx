"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function Hero() {
  const scrollToLocation = () => {
    const element = document.getElementById("location")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/food-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-4 md:px-8"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight mb-6 drop-shadow-lg">
          Mie Ayam Icoy Jakarta
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-amber-200 text-balance mb-12 font-light leading-relaxed drop-shadow-md"
        >
          Hangatnya Cinta Dalam Semangkuk Mie
        </motion.p>

        {/* Order Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center flex-wrap"
        >
          {/* GoFood Button */}
          <motion.a
            href="https://gofood.co.id"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 192, 74, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-amber-500 text-foreground font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg"
          >
            🍜 Order via GoFood
          </motion.a>

          {/* GrabFood Button */}
          <motion.a
            href="https://grabfood.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 192, 74, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-amber-500 text-foreground font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg"
          >
            🚴‍♂️ Order via GrabFood
          </motion.a>

          {/* WhatsApp Button */}
          <motion.button
            onClick={scrollToLocation}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 192, 74, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-red-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />💬 Chat WhatsApp
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16"
        >
          <p className="text-amber-100 text-sm">Scroll ke bawah</p>
          <div className="text-2xl text-amber-200">↓</div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
