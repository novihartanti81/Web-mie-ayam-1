"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SteamParticle {
  id: number
  left: number
  delay: number
  duration: number
}

export default function SteamEffect() {
  const [particles, setParticles] = useState<SteamParticle[]>([])

  useEffect(() => {
    const newParticles: SteamParticle[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(1),
        {
          id: prev.length,
          left: Math.random() * 100,
          delay: 0,
          duration: 2 + Math.random() * 1,
        },
      ])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-1/2 left-0 right-0 w-full h-96 pointer-events-none z-20 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="steam-particle"
          style={{ left: `${particle.left}%` }}
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -200,
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
