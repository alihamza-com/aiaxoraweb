"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Smartphone, Globe, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ParticleSystem from "@/components/particle-system"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

const features = [
  {
    icon: Code,
    title: "Modern Tech Stack",
    description: "React, Next.js, TypeScript, and cutting-edge frameworks for scalable applications",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect user experience across all devices and screen sizes",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built-in SEO best practices for maximum search engine visibility",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with Core Web Vitals compliance",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to grow with your business needs and traffic demands",
    gradient: "from-indigo-500 to-purple-500",
  },
]

const packages = [
  {
    name: "Starter Website",
    price: "$20",
    duration: "2-3 weeks",
    description: "Perfect for small businesses and startups",
    features: [
      "5-8 Custom Pages",
      "Responsive Design",
      "Contact Forms",
      "Basic SEO Setup",
      "3 Months Support",
      "SSL Certificate",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Business Website",
    price: "$30",
    duration: "4-6 weeks",
    description: "Comprehensive solution for growing businesses",
    features: [
      "10-15 Custom Pages",
      "Advanced Animations",
      "CMS Integration",
      "Advanced SEO",
      "6 Months Support",
      "Performance Optimization",
      "Analytics Setup",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "$30+",
    duration: "8-12 weeks",
    description: "Custom enterprise-grade web applications",
    features: [
      "Unlimited Pages",
      "Custom Functionality",
      "API Integrations",
      "Advanced Security",
      "12 Months Support",
      "Performance Monitoring",
      "Priority Support",
      "Custom Training",
    ],
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    text: "Axora delivered an exceptional website that exceeded our expectations. The design is modern, fast, and perfectly represents our brand.",
    image: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions",
    rating: 5,
    text: "Professional team, excellent communication, and outstanding results. Our website traffic increased by 200% after the redesign.",
    image: "/placeholder.svg?height=60&width=60&text=MC",
  },
]

export default function WebDevelopmentPage() {
  return (
    <>
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                <Code className="w-4 h-4" />
                Custom Web Development
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your digital presence with custom web solutions built using modern technologies like React,
                Next.js, and TypeScript. We create fast, secure, and scalable websites that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  asChild
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Web Development?</h2>
              <p className="text-gray-300 text-lg">Modern solutions built with cutting-edge technology</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Web Development Packages</h2>
              <p className="text-gray-300 text-lg">Choose the perfect solution for your business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <Card
                    className={`h-full bg-white/5 backdrop-blur-md border transition-all duration-300 ${
                      pkg.popular ? "border-purple-500/50 shadow-2xl shadow-purple-500/20" : "border-white/10"
                    } hover:border-white/20`}
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="text-4xl font-black text-white mb-2">{pkg.price}</div>
                        <p className="text-gray-300 text-sm mb-2">{pkg.duration}</p>
                        <p className="text-gray-400">{pkg.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold py-3`}
                        asChild
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
              <p className="text-gray-300 text-lg">What our clients say about our web development services</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <div className="text-white font-semibold">{testimonial.name}</div>
                          <div className="text-gray-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Dream Website?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create a custom web solution that drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  )
}
