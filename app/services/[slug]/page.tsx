"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"

const serviceDetails = {
  "ai-development": {
    title: "AI Development",
    subtitle: "Intelligent Solutions for Modern Businesses",
    description:
      "Transform your business operations with cutting-edge AI technology. From conversational chatbots to advanced automation systems, we create intelligent solutions that learn, adapt, and grow with your business.",
    features: [
      "Custom AI Chatbots with Personality",
      "Workflow Automation Systems",
      "Predictive Analytics Dashboards",
      "Natural Language Processing",
      "Machine Learning Model Development",
      "AI-Powered Recommendation Engines",
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Improve customer satisfaction scores",
      "Automate repetitive tasks and processes",
      "Gain actionable insights from data",
      "Scale operations without increasing headcount",
      "Enhance decision-making with AI insights",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "Langchain", "FastAPI", "PostgreSQL"],
    caseStudy: {
      title: "E-commerce AI Assistant",
      description:
        "Developed an intelligent shopping assistant that increased conversion rates by 35% and reduced customer service inquiries by 60%.",
      results: ["35% increase in conversion rates", "60% reduction in support tickets", "24/7 customer assistance"],
    },
    illustration: "/placeholder.svg?height=500&width=800&text=AI+Development+Illustration",
  },
  "web-experiences": {
    title: "Web Experiences",
    subtitle: "Cinematic Digital Experiences That Captivate",
    description:
      "Create extraordinary web experiences that tell your story through motion, interaction, and cutting-edge technology. From stunning landing pages to complex web applications, we craft digital experiences that leave lasting impressions.",
    features: [
      "Cinematic Page Transitions",
      "3D and Parallax Storytelling",
      "Progressive Web Applications",
      "Interactive Microsites",
      "Custom E-commerce Platforms",
      "Performance-Optimized Applications",
    ],
    benefits: [
      "Increase user engagement by 200%",
      "Improve brand perception and recall",
      "Boost conversion rates significantly",
      "Enhance mobile user experience",
      "Achieve lightning-fast load times",
      "Stand out from competitors",
    ],
    technologies: ["Next.js", "React", "Three.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    caseStudy: {
      title: "Luxury Brand Showcase",
      description:
        "Created an immersive 3D web experience for a luxury fashion brand that increased time on site by 300% and boosted online sales by 150%.",
      results: ["300% increase in time on site", "150% boost in online sales", "Award-winning design recognition"],
    },
    illustration: "/placeholder.svg?height=500&width=800&text=Web+Experiences+Illustration",
  },
  "digital-strategy": {
    title: "Digital Strategy",
    subtitle: "Data-Driven Growth That Delivers Results",
    description:
      "Accelerate your digital growth with comprehensive strategies that combine SEO excellence, AI-powered marketing, and compelling brand storytelling. We don't just create campaigns; we build sustainable growth engines.",
    features: [
      "AI-Assisted Content Strategy",
      "Technical SEO Optimization",
      "Brand Identity Development",
      "Social Media Automation",
      "Conversion Rate Optimization",
      "Performance Marketing Campaigns",
    ],
    benefits: [
      "Increase organic traffic by 300%",
      "Improve search engine rankings",
      "Boost brand awareness and recognition",
      "Generate high-quality leads",
      "Optimize marketing spend efficiency",
      "Build lasting customer relationships",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Zapier", "Figma", "Adobe Creative Suite"],
    caseStudy: {
      title: "SaaS Growth Strategy",
      description:
        "Implemented a comprehensive digital strategy for a B2B SaaS company that resulted in 400% growth in qualified leads and 250% increase in organic traffic.",
      results: [
        "400% growth in qualified leads",
        "250% increase in organic traffic",
        "50% reduction in customer acquisition cost",
      ],
    },
    illustration: "/placeholder.svg?height=500&width=800&text=Digital+Strategy+Illustration",
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{service.title}</h1>
              <p className="text-2xl text-cyan-400 mb-8">{service.subtitle}</p>
              <p className="text-xl text-white/70 max-w-4xl leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Service Illustration */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={service.illustration || "/placeholder.svg"}
                alt={`${service.title} illustration`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">What We Deliver</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Business Impact</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Case Study</h2>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{service.caseStudy.title}</h3>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">{service.caseStudy.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-2xl font-bold text-white mb-2">{result}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-white/70">Cutting-edge tools and frameworks for optimal results</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how we can transform your business with {service.title.toLowerCase()}.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  )
}
