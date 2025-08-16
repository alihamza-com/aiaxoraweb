"use client"

import { motion, useInView } from "framer-motion"
import {
  Code,
  Smartphone,
  ShoppingCart,
  Brain,
  TrendingUp,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    href: "/services/web-development",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    features: ["Native Performance", "Cross-Platform", "App Store Ready", "Push Notifications"],
    href: "/services/mobile-apps",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and analytics.",
    features: ["Payment Gateway", "Inventory System", "Analytics", "Mobile Optimized"],
    href: "/services/ecommerce",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent automation and AI-powered features to enhance your digital products.",
    features: ["Chatbots", "Machine Learning", "Data Analytics", "Process Automation"],
    price: "Starting from $30",
    gradient: "from-orange-600 via-orange-500 to-red-400",
    delay: 0.4,
    popular: false,
  },
  {
    icon: TrendingUp,
    title: "SEO Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    href: "/services/digital-marketing",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful and intuitive user interfaces designed for optimal user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    href: "/services/web-design",
    gradient: "from-indigo-500 to-purple-500",
  },
 
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
}

export default function ServiceCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl" />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-white font-semibold">Our Premium Services</span>
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Comprehensive Digital
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Solutions
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            From concept to deployment, we provide{" "}
            <motion.span className="text-blue-400 font-semibold" whileHover={{ scale: 1.05 }}>
              end-to-end digital services
            </motion.span>{" "}
            that drive business growth and deliver exceptional user experiences.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { icon: Users, number: "500+", label: "Projects" },
              { icon: Award, number: "98%", label: "Success Rate" },
              { icon: Zap, number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -20,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group h-full perspective-1000"
            >
              <Card className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-700 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/20 relative">
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    className="absolute -top-3 -right-3 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: service.delay + 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      POPULAR
                    </div>
                  </motion.div>
                )}

                <CardContent className="p-8 h-full flex flex-col relative">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0, 0.6, 0],
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

                  {/* Premium Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-2xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="w-full h-full text-white" />

                    {/* Icon Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-gray-300 leading-relaxed mb-6 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Premium Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-white/90 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: (service.delay ?? 0) + featureIndex * 0.1 }}
                            className="flex items-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-sm font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Price with Animation */}
                    {service.price && (
                      <motion.div className="mb-6" whileHover={{ scale: 1.05 }}>
                        <div
                          className={`text-xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        >
                          {service.price}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">Professional package</div>
                      </motion.div>
                    )}

                    {/* Premium CTA Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden group/btn`}
                        asChild
                      >
                        <Link href={service.href ?? "#"}>
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative flex items-center justify-center">
                            Get Started Now
                            <motion.div
                              className="ml-2"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400/30 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/20 backdrop-blur-2xl shadow-2xl">
            <CardContent className="p-12 relative overflow-hidden">
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />

              <div className="relative z-10">
                <motion.h3 className="text-3xl lg:text-4xl font-black text-white mb-6" whileHover={{ scale: 1.02 }}>
                  Need a Custom Solution?
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Every business is unique. Let's discuss your specific requirements and create a{" "}
                  <span className="text-blue-400 font-semibold">tailored solution</span> that perfectly fits your needs
                  and budget.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
                      asChild
                    >
                      <Link href="/contact">
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative flex items-center">
                          Schedule Free Consultation
                          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold bg-transparent backdrop-blur-sm"
                      asChild
                    >
                      <Link href="/products">View Our Products</Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {[
                    { icon: CheckCircle, text: "Free Consultation" },
                    { icon: Shield, text: "Money Back Guarantee" },
                    { icon: Zap, text: "Fast Delivery" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-2 text-gray-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <item.icon className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
