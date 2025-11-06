"use client"

import { motion } from "framer-motion"
import { Instagram, MessageCircle, Music2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/mieayamicoy",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Music2,
      href: "https://tiktok.com/@mieayamicoy",
      label: "TikTok",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/628123456789",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-foreground to-primary text-background py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Mie Ayam Icoy Jakarta</h3>
            <p className="text-background/80 leading-relaxed">
              Hangatnya cinta dalam semangkuk mie. Kami menghadirkan cita rasa autentik dengan bahan pilihan terbaik.
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-background/80">
              <p>Senin - Minggu</p>
              <p className="text-lg font-semibold text-accent">08:00 - 21:00</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-background/10 transition-all ${link.color}`}
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-background/80 text-sm">
            © {currentYear} Mie Ayam Icoy Jakarta — Gurihnya Bikin Balik Lagi
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
