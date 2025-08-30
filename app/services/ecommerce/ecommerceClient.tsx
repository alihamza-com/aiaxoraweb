"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, CreditCard, Truck, BarChart3, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ParticleSystem from "@/components/particle-system"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Online Stores",
    description: "Tailored e-commerce solutions built with modern frameworks and optimized for conversions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment gateways including Stripe, PayPal, and local payment methods",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Inventory Management",
    description: "Advanced inventory tracking, order management, and shipping integration",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive sales analytics, customer insights, and performance tracking",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "PCI DSS compliance, SSL certificates, and advanced security measures",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Multi-Channel Sales",
    description: "Sell across multiple platforms including social media and marketplaces",
    gradient: "from-teal-500 to-cyan-500",
  },
]

const platforms = [
  {
    name: "Custom E-commerce",
    description: "Built from scratch with React/Next.js",
    features: ["Complete customization", "Scalable architecture", "Advanced features", "Full control"],
    price: "From $20",
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    name: "Shopify Development",
    description: "Professional Shopify store setup",
    features: ["Theme customization", "App integrations", "Payment setup", "SEO optimization"],
    price: "From $30",
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
  {
    name: "WooCommerce",
    description: "WordPress-based e-commerce solution",
    features: ["WordPress integration", "Plugin development", "Custom themes", "Payment gateways"],
    price: "From $50",
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
]

const successStories = [
  {
    client: "Fashion Boutique",
    industry: "Fashion & Apparel",
    results: "300% increase in online sales",
    description: "Complete e-commerce transformation with custom design and advanced features",
    image: "/shopease.jpg",
    metrics: { sales: "+300%", conversion: "+45%", traffic: "+200%" },
  },
  {
    client: "Electronics Store",
    industry: "Electronics & Gadgets",
    results: "500% growth in 6 months",
    description: "Multi-vendor marketplace with advanced inventory management",
    image: "/erp2.png",
    metrics: { sales: "+500%", conversion: "+60%", traffic: "+350%" },
  },
]

export default function EcommercePage() {
  return (
    <>
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6"
              >
                <ShoppingCart className="w-4 h-4" />
                E-commerce Solutions
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  E-commerce Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your business with powerful e-commerce solutions. We build custom online stores that drive
                sales, enhance customer experience, and scale with your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  asChild
                >
                  <Link href="/contact">Start Your Store</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Stores</Link>
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
              <h2 className="text-4xl font-bold text-white mb-4">Complete E-commerce Solutions</h2>
              <p className="text-gray-300 text-lg">Everything you need to succeed in online retail</p>
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

        {/* Platforms Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">E-commerce Platforms We Work With</h2>
              <p className="text-gray-300 text-lg">Choose the perfect platform for your business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {platform.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <Card
                    className={`h-full bg-white/5 backdrop-blur-md border transition-all duration-300 ${
                      platform.popular ? "border-green-500/50 shadow-2xl shadow-green-500/20" : "border-white/10"
                    } hover:border-white/20`}
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                        <p className="text-gray-300 mb-4">{platform.description}</p>
                        <div className="text-3xl font-black text-white">{platform.price}</div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {platform.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full bg-gradient-to-r ${platform.gradient} hover:opacity-90 text-white font-semibold py-3`}
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

        {/* Success Stories Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">E-commerce Success Stories</h2>
              <p className="text-gray-300 text-lg">Real results from our e-commerce projects</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.client}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.client}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {story.industry}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{story.client}</h3>
                      <p className="text-green-400 font-semibold text-lg mb-4">{story.results}</p>
                      <p className="text-gray-300 mb-6">{story.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{story.metrics.sales}</div>
                          <div className="text-gray-400 text-sm">Sales Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{story.metrics.conversion}</div>
                          <div className="text-gray-400 text-sm">Conversion Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{story.metrics.traffic}</div>
                          <div className="text-gray-400 text-sm">Traffic Increase</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Online Store?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build an e-commerce solution that drives sales and grows your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Store
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Our Stores</Link>
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
