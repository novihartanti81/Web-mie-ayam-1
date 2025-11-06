"use client"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function VideoSection() {
  const videos = [
    { id: 1, src: "/videos/reel-1.mp4" },
    { id: 2, src: "/videos/reel-2.mp4" },
    { id: 3, src: "/videos/reel-3.mp4" },
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  useEffect(() => {
    const currentVideo = videoRefs.current[videos[currentVideoIndex].id]
    if (!currentVideo) return

    const playVideo = () => {
      // Pause all other videos
      videos.forEach((video) => {
        if (video.id !== videos[currentVideoIndex].id && videoRefs.current[video.id]) {
          videoRefs.current[video.id]?.pause()
        }
      })
      // Play current video
      currentVideo.play().catch((err) => {
        console.log("[v0] Autoplay prevented:", err)
      })
    }

    // Handle when video ends - move to next video
    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    currentVideo.addEventListener("ended", handleVideoEnd)
    playVideo()

    return () => {
      currentVideo.removeEventListener("ended", handleVideoEnd)
    }
  }, [currentVideoIndex, videos])

  const handleVideoPlay = (videoId: number) => {
    const videoIndex = videos.findIndex((v) => v.id === videoId)
    setCurrentVideoIndex(videoIndex)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 md:py-24 bg-card"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
        >
          Video Spesial Kami
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl aspect-video shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[video.id] = el
                }}
                autoPlay={currentVideoIndex === index}
                muted={true}
                onClick={() => handleVideoPlay(video.id)}
                className="w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all pointer-events-none" />

              {currentVideoIndex === index && (
                <div className="absolute top-2 right-2 bg-accent text-foreground text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                  ▶ Now Playing
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentVideoIndex === index ? "bg-accent w-8" : "bg-muted w-2 hover:bg-muted/70"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
