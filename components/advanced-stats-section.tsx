"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Average ROI Increase",
    description: "Performance improvement across all client projects",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted by startups to Fortune 500 companies",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition for innovation and excellence",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Zap,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
    description: "Reliable performance you can count on",
    gradient: "from-purple-500 to-pink-600",
  },
]

function CountUpAnimation({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }, [value, duration])

  return <span>{count}</span>
}

export default function AdvancedStatsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))",
              "linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real metrics from real projects that demonstrate our commitment to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 overflow-hidden">
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 mb-6 relative z-10 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Value */}
                <div className="relative z-10 mb-4">
                  <span className="text-5xl font-bold text-white">
                    <CountUpAnimation value={stat.value} />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{stat.label}</h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{stat.description}</p>

                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-lg mb-8">Ready to become our next success story?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
