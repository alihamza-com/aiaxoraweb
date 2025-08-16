"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

const portfolioItems = [
  {
    id: 1,
    title: "Storyboard E-commerce Platform",
    category: "Web Experience",
    description:
      "An immersive e-commerce platform with mini-comic case studies and animated product showcases. Features cinematic scrolling and interactive product demonstrations.",
    image: "/placeholder.svg?height=600&width=800&text=Storyboard+Ecommerce",
    demoUrl: "#",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Stripe"],
    results: ["300% increase in engagement", "150% boost in conversions", "Award-winning design"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    category: "AI Development",
    description:
      "Real-time analytics dashboard with AI-driven insights and predictive modeling. Features interactive data visualizations and automated reporting.",
    image: "/placeholder.svg?height=600&width=800&text=AI+Analytics+Dashboard",
    demoUrl: "#",
    technologies: ["React", "Python", "TensorFlow", "D3.js"],
    results: ["40% faster decision making", "60% reduction in manual reporting", "Real-time insights"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Luxury Brand Showcase",
    category: "Digital Strategy",
    description:
      "Premium brand experience with 3D product visualization and immersive storytelling. Combines luxury aesthetics with cutting-edge technology.",
    image: "/placeholder.svg?height=600&width=800&text=Luxury+Brand+Showcase",
    demoUrl: "#",
    technologies: ["Next.js", "Three.js", "GSAP", "WebGL"],
    results: ["500% increase in time on site", "200% boost in brand recall", "Premium user experience"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "Interactive Learning Platform",
    category: "Web Experience",
    description:
      "Gamified learning platform with AI-powered personalization and interactive content delivery. Features progress tracking and adaptive learning paths.",
    image: "/placeholder.svg?height=600&width=800&text=Learning+Platform",
    demoUrl: "#",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    results: ["85% completion rate", "90% user satisfaction", "Scalable architecture"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "Fintech Mobile App",
    category: "AI Development",
    description:
      "AI-driven financial management app with smart budgeting, investment recommendations, and fraud detection. Features biometric security and real-time notifications.",
    image: "/placeholder.svg?height=600&width=800&text=Fintech+Mobile+App",
    demoUrl: "#",
    technologies: ["React Native", "Python", "AWS", "Blockchain"],
    results: ["1M+ downloads", "4.8 app store rating", "Bank-level security"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: 6,
    title: "Creative Agency Portfolio",
    category: "Digital Strategy",
    description:
      "Award-winning portfolio website with parallax storytelling and interactive case studies. Features custom animations and seamless user experience.",
    image: "/placeholder.svg?height=600&width=800&text=Creative+Agency+Portfolio",
    demoUrl: "#",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    results: ["400% increase in inquiries", "Design award winner", "Industry recognition"],
    gradient: "from-indigo-500 to-purple-600",
  },
]

export default function PortfolioPage() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of extraordinary digital experiences that push the boundaries of creativity and
                technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={800}
                          height={600}
                          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Demo Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="lg"
                            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold rounded-full border border-white/30"
                            asChild
                          >
                            {/* <Link href={item.demoUrl}>
                              <Play className="w-5 h-5 mr-2" />
                              Play Demo
                            </Link> */}
                          </Button>
                        </div>

                        {/* Project Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-8">
                        <p className="text-white/70 leading-relaxed mb-6">{item.description}</p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">
                            Key Results
                          </h4>
                          <div className="space-y-2">
                            {item.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
                                <span className="text-white/80 text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            className={`flex-1 bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white font-semibold`}
                            asChild
                          >
                            <Link href={item.demoUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                            asChild
                          >
                            <Link href="/contact">Discuss Similar Project</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Project Impact</h2>
              <p className="text-white/70 text-lg">Measurable results that drive business growth</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed", gradient: "from-cyan-500 to-blue-600" },
                { number: "300%", label: "Average ROI Increase", gradient: "from-purple-500 to-pink-600" },
                { number: "99%", label: "Client Satisfaction", gradient: "from-green-500 to-emerald-600" },
                { number: "24/7", label: "Support Available", gradient: "from-orange-500 to-red-600" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Extraordinary?</h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss your vision and bring it to life with our expertise and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
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
                  <Link href="/services">View Services</Link>
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
