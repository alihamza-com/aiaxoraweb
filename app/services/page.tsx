"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, Globe, TrendingUp, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ParticleSystem from "@/components/particle-system"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

// SEO-optimized services data
const services = [
  {
    slug: "ai-development",
    icon: Brain,
    title: "AI Development Services",
    summary:
      "Custom AI chatbot development, machine learning models, and intelligent automation solutions for enterprise businesses",
    features: [
      "GPT-4 powered conversational AI chatbots",
      "Custom machine learning model development",
      "Workflow automation and process optimization",
      "Advanced analytics and business intelligence dashboards",
      "Natural language processing (NLP) solutions",
      "AI-powered recommendation and personalization systems",
    ],
    seoKeywords: "AI chatbot development, machine learning services, GPT-4 integration, NLP solutions, AI automation",
    gradient: "from-cyan-500 to-blue-600",
    illustration: "/placeholder.svg?height=400&width=600&text=AI+Development+Services",
  },
  {
    slug: "web-experiences",
    icon: Globe,
    title: "Next.js Web Development",
    summary:
      "High-performance Next.js applications, progressive web apps (PWAs), and custom React development with TypeScript",
    features: [
      "Next.js 14 with App Router development",
      "React 18 with TypeScript integration",
      "Progressive Web Apps (PWAs) development",
      "Server-side rendering (SSR) optimization",
      "Custom e-commerce platforms with Stripe integration",
      "Performance optimization and Core Web Vitals",
    ],
    seoKeywords: "Next.js development, React development, PWA development, TypeScript, SSR optimization",
    gradient: "from-purple-500 to-pink-600",
    illustration: "/placeholder.svg?height=400&width=600&text=NextJS+Web+Development",
  },
  {
    slug: "digital-strategy",
    icon: TrendingUp,
    title: "AI-Powered Digital Marketing",
    summary:
      "SEO optimization, AI-driven content marketing, and digital transformation strategies that deliver measurable ROI",
    features: [
      "AI-assisted content strategy and generation",
      "Technical SEO and Core Web Vitals optimization",
      "Brand identity and visual design systems",
      "Marketing automation with AI personalization",
      "Conversion rate optimization (CRO) strategies",
      "Digital analytics and performance tracking",
    ],
    seoKeywords: "AI digital marketing, SEO optimization, content marketing, CRO, marketing automation",
    gradient: "from-green-500 to-emerald-600",
    illustration: "/placeholder.svg?height=400&width=600&text=AI+Digital+Marketing",
  },
]

// Structured data for services page
const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Web Development Services | Next.js & React Experts | Axora",
  description:
    "Professional AI web development services including Next.js development, AI chatbots, and digital marketing. Get 300% ROI with our expert team.",
  url: "https://axora.dev/services",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.summary,
      url: `https://axora.dev/services/${service.slug}`,
      provider: {
        "@type": "Organization",
        name: "Axora Web Solution",
      },
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://axora.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://axora.dev/services",
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageJsonLd) }} />
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* SEO-optimized Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Web Development{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Professional AI-powered web development services including Next.js applications, custom AI chatbots, and
                digital marketing strategies. Trusted by 150+ companies worldwide with 300% average ROI.
              </p>

              {/* SEO Keywords Integration */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {[
                  "Next.js Development",
                  "AI Chatbots",
                  "React TypeScript",
                  "Digital Marketing",
                  "SEO Optimization",
                ].map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid with Enhanced SEO */}
        <section className="py-24 px-6" itemScope itemType="https://schema.org/Service">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Service Header */}
                      <header className="p-8 pb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6`}>
                          <service.icon className="w-full h-full text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4" itemProp="name">
                          {service.title}
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-6" itemProp="description">
                          {service.summary}
                        </p>

                        {/* SEO Keywords */}
                        <div className="mb-4">
                          <span className="text-xs text-white/40 uppercase tracking-wider">Specialties: </span>
                          <span className="text-xs text-cyan-400">{service.seoKeywords}</span>
                        </div>
                      </header>

                      {/* Features List */}
                      <div className="px-8 pb-6">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                          What's Included:
                        </h3>
                        <ul className="space-y-3" itemProp="hasOfferCatalog">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start gap-3 text-white/80"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              itemProp="serviceOutput"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mt-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <footer className="p-8 pt-0">
                        <Link href={`/services/${service.slug}`}>
                          <Button
                            className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold group-hover:scale-105 transition-all duration-300`}
                            aria-label={`Learn more about ${service.title}`}
                          >
                            Learn More About {service.title.split(" ")[0]}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </footer>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section with SEO */}
        <section className="py-24 px-6" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="process-heading" className="text-4xl font-bold text-white mb-4">
                Our AI-Powered Development Process
              </h2>
              <p className="text-white/70 text-lg">
                How we transform your ideas into high-performance web applications with AI integration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "AI-Assisted Discovery",
                  description:
                    "Understanding your business goals with AI-powered market analysis and competitor research",
                  keywords: "business analysis, market research, AI insights",
                },
                {
                  step: "02",
                  title: "Strategic Planning",
                  description: "Crafting the perfect technical architecture with Next.js, React, and AI integrations",
                  keywords: "Next.js architecture, React planning, AI strategy",
                },
                {
                  step: "03",
                  title: "Agile Development",
                  description: "Building with TypeScript, Tailwind CSS, and modern development practices",
                  keywords: "TypeScript development, Tailwind CSS, agile methodology",
                },
                {
                  step: "04",
                  title: "Performance Launch",
                  description: "Deploying optimized applications with monitoring, analytics, and ongoing support",
                  keywords: "performance optimization, deployment, monitoring",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 mb-3">{item.description}</p>
                  <div className="text-xs text-cyan-400">{item.keywords}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with SEO */}
        <section className="py-24 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/70 mb-8">
                Join 150+ companies that have achieved 300% ROI with our AI-powered web development services. Get a free
                consultation and project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    Get Free AI Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  >
                    View AI Projects
                  </Button>
                </Link>
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
