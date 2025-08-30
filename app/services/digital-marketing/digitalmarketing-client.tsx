"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Search, Users, BarChart3, Target, Megaphone, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ParticleSystem from "@/components/particle-system"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Improve your website's visibility and ranking on Google and other search engines",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with customers across social platforms",
    gradient: "from-purple-500 to-pink-500",
    features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
  },
  {
    icon: Target,
    title: "Pay-Per-Click Advertising",
    description: "Drive targeted traffic and conversions with strategic PPC campaigns",
    gradient: "from-green-500 to-emerald-500",
    features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "ROI Tracking"],
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your audience",
    gradient: "from-orange-500 to-red-500",
    features: ["Blog Writing", "Video Content", "Email Marketing", "Content Strategy"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track performance and optimize campaigns with detailed analytics and insights",
    gradient: "from-indigo-500 to-purple-500",
    features: ["Google Analytics", "Performance Reports", "ROI Analysis", "Data Insights"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Improve your website's conversion rate and maximize your marketing ROI",
    gradient: "from-teal-500 to-cyan-500",
    features: ["A/B Testing", "Landing Pages", "User Experience", "Conversion Tracking"],
  },
]

const packages = [
  {
    name: "Starter Marketing",
    price: "$20/month",
    duration: "3-month minimum",
    description: "Essential digital marketing for small businesses",
    features: ["SEO Optimization", "Social Media Management", "Google My Business", "Monthly Reports", "Email Support"],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Growth Marketing",
    price: "$30/month",
    duration: "6-month minimum",
    description: "Comprehensive marketing for growing businesses",
    features: [
      "Advanced SEO",
      "PPC Campaigns",
      "Social Media Ads",
      "Content Marketing",
      "Analytics & Reporting",
      "Priority Support",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise Marketing",
    price: "$30+/month",
    duration: "12-month minimum",
    description: "Full-scale marketing for large businesses",
    features: [
      "Multi-Channel Campaigns",
      "Advanced Analytics",
      "Custom Strategies",
      "Dedicated Account Manager",
      "24/7 Support",
      "Quarterly Reviews",
    ],
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
]

const results = [
  {
    client: "Local Restaurant Chain",
    industry: "Food & Beverage",
    challenge: "Low online visibility and foot traffic",
    solution: "Local SEO, social media marketing, and Google Ads",
    results: {
      traffic: "+400%",
      leads: "+250%",
      revenue: "+180%",
    },
    image: "/erp1.png",
  },
  {
    client: "E-commerce Fashion Brand",
    industry: "Fashion & Retail",
    challenge: "High competition and low conversion rates",
    solution: "SEO optimization, PPC campaigns, and conversion optimization",
    results: {
      traffic: "+300%",
      leads: "+350%",
      revenue: "+220%",
    },
    image: "/crypto_tracker.png",
  },
]

export default function DigitalMarketingPage() {
  return (
    <>
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6"
              >
                <TrendingUp className="w-4 h-4" />
                Digital Marketing Services
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Strategic
                <span className="block bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Grow your business with data-driven digital marketing strategies. We help you reach your target
                audience, increase brand awareness, and drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  asChild
                >
                  <Link href="/contact">Start Marketing</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Results</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Digital Marketing Services</h2>
              <p className="text-gray-300 text-lg">Everything you need to succeed in digital marketing</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">SEO Content writings</h2>
              <p className="text-gray-300 text-lg">Choose the perfect marketing solution for your business</p>
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
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <div className="text-3xl font-black text-white mb-2">{pkg.price}</div>
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

        {/* Results Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Marketing Success Stories</h2>
              <p className="text-gray-300 text-lg">Real results from our digital marketing campaigns</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {results.map((result, index) => (
                <motion.div
                  key={result.client}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={result.image || "/placeholder.svg"}
                        alt={result.client}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {result.industry}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{result.client}</h3>
                      <div className="mb-4">
                        <h4 className="text-purple-400 font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm mb-4">{result.challenge}</p>
                        <h4 className="text-purple-400 font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm mb-6">{result.solution}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{result.results.traffic}</div>
                          <div className="text-gray-400 text-sm">Website Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{result.results.leads}</div>
                          <div className="text-gray-400 text-sm">Lead Generation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{result.results.revenue}</div>
                          <div className="text-gray-400 text-sm">Revenue Growth</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create a digital marketing strategy that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Start Marketing
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Case Studies</Link>
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
