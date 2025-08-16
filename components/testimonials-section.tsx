"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "TechFlow Inc.",
    image: "/sarah.jpeg",
    rating: 5,
    text: "Axora transformed our digital presence completely. Their AI-powered approach and attention to detail is unmatched. The results speak for themselves - 300% increase in conversions.",
    metrics: { metric: "300%", label: "Conversion Increase" },
  },
  {
    id: 2,
    name: "Tayab CEO",
    role: "Founder, InnovateLab",
    company: "InnovateLab",
    image: "/tayab.png",
    rating: 5,
    text: "Working with Axora was like having a crystal ball for our business. They predicted market trends and created solutions we didn't even know we needed. Phenomenal team.",
    metrics: { metric: "500%", label: "ROI Growth" },
  },
  {
    id: 3,
    name: "Saad Manager",
    role: "CMO, FutureWorks",
    company: "FutureWorks Ltd.",
    image: "/saad.jpg",
    rating: 5,
    text: "The level of creativity and technical expertise Axora brings is extraordinary. They don't just build websites, they craft experiences that tell stories.",
    metrics: { metric: "250%", label: "Engagement Up" },
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO, CloudVision",
    company: "CloudVision",
    image: "/aora.jpeg",
    rating: 5,
    text: "Axora's AI integration capabilities are years ahead of the competition. They helped us implement solutions that seemed impossible before.",
    metrics: { metric: "90%", label: "Time Saved" },
  },
]

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Quote className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/90">Client Success Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover how we've transformed businesses and exceeded expectations across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Testimonial Display */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-0 relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl text-white/90 leading-relaxed mb-8 font-light">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white/20"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonials[activeTestimonial].name}</p>
                    <p className="text-cyan-400 font-medium">{testimonials[activeTestimonial].role}</p>
                    <p className="text-white/60 text-sm">{testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metrics */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-white mb-2">{testimonials[activeTestimonial].metrics.metric}</div>
              <div className="text-white/70 font-medium">{testimonials[activeTestimonial].metrics.label}</div>
            </motion.div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  index === activeTestimonial
                    ? "bg-white/10 border-cyan-400/50 shadow-lg shadow-cyan-500/10"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={`rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? "ring-2 ring-cyan-400" : ""
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-lg">{testimonial.metrics.metric}</div>
                    <div className="text-white/60 text-xs">{testimonial.metrics.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
