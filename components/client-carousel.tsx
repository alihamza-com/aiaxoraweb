"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120&text=TechCorp" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120&text=InnovateLab" },
  { name: "FutureWorks", logo: "/placeholder.svg?height=60&width=120&text=FutureWorks" },
  { name: "DigitalEdge", logo: "/placeholder.svg?height=60&width=120&text=DigitalEdge" },
  { name: "CloudVision", logo: "/placeholder.svg?height=60&width=120&text=CloudVision" },
  { name: "AIForward", logo: "/placeholder.svg?height=60&width=120&text=AIForward" },
]

export default function ClientCarousel() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white/90 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-white/60">Partnering with innovative companies worldwide</p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
