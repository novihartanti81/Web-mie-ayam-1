"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

export default function LocationSection() {
  return (
    <motion.section
      id="location"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 md:py-24 bg-gradient-to-br from-card to-muted"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Kunjungi Kami
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.669661050309!2d106.8141627!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f5f5f5f5f5%3A0x0!2sJl.%20Raya%20Jakarta%20No.%2027!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Lokasi Mie Ayam Icoy Jakarta"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full p-3">
                  <MapPin className="text-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Lokasi</h3>
                  <p className="text-muted-foreground">Jl. Raya Jakarta No. 27, Jakarta</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full p-3">
                  <Clock className="text-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">08:00 - 21:00 Setiap Hari</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full p-3">
                  <Phone className="text-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Hubungi Kami</h3>
                  <motion.a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-primary font-semibold hover:underline"
                  >
                    WhatsApp: +62 812 3456 789
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed italic pt-4"
            >
              "Datang dan rasakan kehangatan cinta dalam setiap semangkuk mie kami. Kami siap menyajikan pengalaman
              kuliner terbaik untuk Anda dan keluarga."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
