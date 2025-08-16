"use client"

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Star, Users, Award, Zap, Sparkles, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Award, color: "from-blue-500 to-cyan-400" },
  { number: "98%", label: "Client Satisfaction", icon: Star, color: "from-purple-500 to-pink-400" },
  { number: "150+", label: "Happy Clients", icon: Users, color: "from-green-500 to-emerald-400" },
  { number: "24/7", label: "Support Available", icon: Zap, color: "from-orange-500 to-red-400" },
]

const features = [
  { text: "Custom Web Development", icon: "🚀" },
  { text: "AI Integration & Automation", icon: "🤖" },
  { text: "E-commerce Solutions", icon: "🛒" },
  { text: "Mobile App Development", icon: "📱" },
  { text: "Digital Marketing", icon: "📈" },
  { text: "24/7 Technical Support", icon: "🛡️" },
]

const floatingElements = [
  { id: 1, size: "w-20 h-20", color: "bg-blue-500/20", delay: 0, duration: 6 },
  { id: 2, size: "w-16 h-16", color: "bg-purple-500/20", delay: 1, duration: 8 },
  { id: 3, size: "w-12 h-12", color: "bg-pink-500/20", delay: 2, duration: 7 },
  { id: 4, size: "w-24 h-24", color: "bg-cyan-500/20", delay: 0.5, duration: 9 },
  { id: 5, size: "w-14 h-14", color: "bg-green-500/20", delay: 1.5, duration: 5 },
]

export default function EnhancedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const ySpring = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX - innerWidth / 2) / innerWidth
      const yPct = (clientY - innerHeight / 2) / innerHeight
      x.set(xPct * 50)
      ySpring.set(yPct * 50)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, ySpring])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)",
              "linear-gradient(225deg, #1e293b 0%, #334155 25%, #475569 50%, #334155 75%, #1e293b 100%)",
              "linear-gradient(315deg, #334155 0%, #475569 25%, #64748b 50%, #475569 75%, #334155 100%)",
              "linear-gradient(45deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Interactive mouse-following gradient */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 100%)",
            x,
            y: ySpring,
          }}
        />

        {/* Floating geometric shapes */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} ${element.color} rounded-full blur-xl`}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.delay,
            }}
            style={{
              left: `${20 + element.id * 15}%`,
              top: `${10 + element.id * 10}%`,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white font-semibold">Premium Web Solutions</span>
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            {/* Main Heading with Advanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transform Your
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Digital Vision
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-8 w-8 h-8 border-2 border-purple-400/50 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm"
                    animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </motion.span>
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Into Reality
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              We craft{" "}
              <motion.span className="text-blue-400 font-semibold" whileHover={{ scale: 1.05, color: "#60a5fa" }}>
                extraordinary digital experiences
              </motion.span>{" "}
              that drive business growth. From custom development to AI integration, we deliver solutions that set you
              apart from the competition.
            </motion.p>

            {/* Interactive Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.span>
                  <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    <motion.span
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Start Your Project
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold backdrop-blur-xl bg-white/5 relative overflow-hidden group"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Play className="mr-3 w-5 h-5" />
                    </motion.div>
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="flex items-center gap-8 pt-6"
            >
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 border-white/20 flex items-center justify-center text-white font-bold text-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 2.4 + i * 0.1 }}
                      whileHover={{ scale: 1.2, z: 10 }}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <span className="text-white font-semibold">150+ Happy Clients</span>
                  <div className="text-gray-400 text-sm">Worldwide</div>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 2.6 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <span className="text-white font-semibold ml-2">4.9/5 Rating</span>
                  <div className="text-gray-400 text-sm">Based on reviews</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Stats Grid with Vuexy-style Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  whileHover={{ y: -15, rotateY: 5, scale: 1.05 }}
                  className="group perspective-1000"
                >
                  <Card className="relative bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/25">
                    <CardContent className="p-6 text-center relative z-10">
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        whileHover={{ scale: 1.1 }}
                      />

                      {/* Floating Icon */}
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg relative z-10`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-8 h-8 text-white" />

                        {/* Pulse effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl`}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>

                      {/* Animated Counter */}
                      <motion.div
                        className="text-4xl font-black text-white mb-2 relative z-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.4 + index * 0.2 }}
                        >
                          {stat.number}
                        </motion.span>
                      </motion.div>

                      <div className="text-gray-300 text-sm font-semibold relative z-10 group-hover:text-white transition-colors">
                        {stat.label}
                      </div>

                      {/* Decorative Elements */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Floating Dashboard Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-12 -left-8 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, 20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Interactive Data Visualization */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full" />
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full" />
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-4">
              {[
                { icon: CheckCircle, text: "Free Consultation", color: "text-green-400" },
                { icon: Shield, text: "No Hidden Costs", color: "text-blue-400" },
                { icon: TrendingUp, text: "Quick Turnaround", color: "text-purple-400" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 max-w-4xl w-full mx-4 border border-white/20 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="text-white text-center relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Play className="w-20 h-20 mx-auto mb-6 opacity-70" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">Demo Video Coming Soon</h3>
                  <p className="text-gray-300 text-lg">Experience the future of web design</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Close Preview
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
