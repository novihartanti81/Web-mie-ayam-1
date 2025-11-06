"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import SplashScreen from "@/components/splash-screen"
import Hero from "@/components/hero"
import VideoSection from "@/components/video-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"
import SteamEffect from "@/components/steam-effect"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio && !isMuted) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("[v0] Audio autoplay blocked by browser policy")
        })
      }
    }
  }, [isMuted])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("[v0] Audio playing successfully")
            })
            .catch((err) => {
              console.log("[v0] Audio play error:", err.message)
            })
        }
      } else {
        audioRef.current.pause()
      }
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="w-full overflow-x-hidden">
      <AnimatePresence mode="wait">{showSplash && <SplashScreen key="splash" />}</AnimatePresence>

      {!showSplash && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={toggleAudio}
            className="fixed top-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>

          <audio
            ref={audioRef}
            src="/public/audio/background.mp3"
            loop
            crossOrigin="anonymous"
            preload="auto"
          />

          <SteamEffect />
          <Hero />

          {/* Video Section */}
          <VideoSection />

          {/* Location Section */}
          <LocationSection />

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  )
}
