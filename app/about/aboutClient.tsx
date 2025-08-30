"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Lightbulb, Award, Code, Brain, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import ParticleSystem from "@/components/particle-system"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

// SEO-optimized team data
const team = [
  {
    name: "Sana Saleem",
    role: "Creative Technologist & AI Strategist",
    bio: "10+ years leading AI-powered web development projects. Expert in Next.js, React, and machine learning integration.",
    image: "/alina.jpeg",
    skills: ["AI Strategy", "Next.js", "React", "TypeScript", "Machine Learning"],
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Ali Hamza",
    role: "Senior AI/UX Designer",
    bio: "Human-centered AI design specialist with 8+ years creating intuitive interfaces for complex AI systems.",
    image: "/ali.jpeg",
    skills: ["AI UX Design", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    linkedin: "https://linkedin.com/in/zara-chen-ux",
  },
  {
    name: "Tayab Shb",
    role: "Full-Stack AI Engineer",
    bio: "Full-stack developer specializing in scalable AI web architectures, serverless computing, and performance optimization.",
    image: "/tayab.png",
    skills: ["Node.js", "Python", "AI APIs", "Cloud Architecture", "DevOps"],
    linkedin: "https://linkedin.com/in/orion-blake-dev",
  },
  {
    name: "Saad Hussain",
    role: "Motion Designer & Frontend Specialist",
    bio: "Award-winning motion designer creating cinematic web experiences with Framer Motion and advanced CSS animations.",
    image: "/saad.jpg",
    skills: ["Framer Motion", "CSS Animations", "Three.js", "GSAP", "Creative Coding"],
    linkedin: "https://linkedin.com/in/rhea-santos-motion",
  },
]

// Enhanced timeline with SEO keywords
const timeline = [
  {
    year: "2019",
    title: "AI-First Foundation",
    description:
      "Founded Axora with a vision to integrate artificial intelligence into every aspect of web development. Started with experimental AI-powered UI generation.",
    icon: Lightbulb,
    achievements: ["First AI chatbot integration", "GPT-2 content generation", "Machine learning prototypes"],
    keywords: "AI web development, chatbot integration, machine learning",
  },
  {
    year: "2021",
    title: "Next.js Specialization",
    description:
      "Became Next.js and React specialists, delivering high-performance web applications with server-side rendering and advanced optimization.",
    icon: Code,
    achievements: ["50+ Next.js projects", "React 18 early adoption", "TypeScript integration"],
    keywords: "Next.js development, React applications, TypeScript",
  },
  {
    year: "2023",
    title: "AI-Powered Experiences",
    description:
      "Pioneered story-driven web experiences with AI-generated content, 3D elements, and comprehensive AI strategy consulting.",
    icon: Brain,
    achievements: ["GPT-4 integration", "AI content generation", "Predictive analytics"],
    keywords: "GPT-4 integration, AI content generation, predictive analytics",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description:
      "Launched advanced AI web solutions with real-time APIs, setting new industry standards for AI-powered web experiences.",
    icon: Award,
    achievements: ["25+ industry awards", "300% average ROI", "150+ satisfied clients"],
    keywords: "AI web solutions, industry awards, client success",
  },
]

// Structured data for about page
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Axora Web Solution - AI Web Development Team",
  description:
    "Meet the AI web development experts behind Axora. Our team of Next.js specialists, AI engineers, and UX designers deliver 300% ROI for clients worldwide.",
  url: "https://axora.dev/about",
  mainEntity: {
    "@type": "Organization",
    name: "Axora Web Solution",
    foundingDate: "2019",
    numberOfEmployees: "10-50",
    description: "Leading AI-powered web development agency",
    employee: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      sameAs: member.linkedin,
    })),
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* SEO-optimized Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Axora's AI Team
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                We are AI-powered web development specialists, Next.js experts, and digital transformation consultants
                who believe that combining human creativity with artificial intelligence creates extraordinary results.
                Our team has delivered 300% ROI for 150+ companies worldwide.
              </p>

              {/* Team expertise keywords */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {[
                  "AI Development",
                  "Next.js Experts",
                  "React Specialists",
                  "TypeScript",
                  "Machine Learning",
                  "UX Design",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-white/60 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <section className="py-24 px-6" aria-labelledby="timeline-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="timeline-heading" className="text-4xl font-bold text-white mb-4">
                Our AI-Powered Journey
              </h2>
              <p className="text-white/70 text-lg">
                The evolution from traditional web development to AI-first digital experiences
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full" />

              {timeline.map((item, index) => (
                <motion.article
                  key={item.year}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <header className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "justify-end" : ""}`}>
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                              item.year === "2019"
                                ? "from-cyan-500 to-blue-600"
                                : item.year === "2021"
                                  ? "from-purple-500 to-pink-600"
                                  : item.year === "2023"
                                    ? "from-green-500 to-emerald-600"
                                    : "from-orange-500 to-red-600"
                            } p-3`}
                          >
                            <item.icon className="w-full h-full text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                            <h4 className="text-lg font-semibold text-cyan-400">{item.title}</h4>
                          </div>
                        </header>

                        <p className="text-white/70 mb-4">{item.description}</p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-white/60 text-sm flex items-center gap-2">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* SEO Keywords */}
                        <div className="text-xs text-cyan-400/60">Focus: {item.keywords}</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section className="py-24 px-6" itemScope itemType="https://schema.org/Organization">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our AI Development Experts</h2>
              <p className="text-white/70 text-lg">
                The creative minds and technical experts behind Axora's AI-powered web solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.role} at Axora Web Solution`}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2" itemProp="name">
                          {member.name}
                        </h3>
                        <p className="text-cyan-400 font-semibold mb-2" itemProp="jobTitle">
                          {member.role}
                        </p>
                        <p className="text-white/70 text-sm mb-4" itemProp="description">
                          {member.bio}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 text-xs uppercase tracking-wider">Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-2 py-1 bg-white/10 rounded text-white/60 text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* LinkedIn Link */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                          itemProp="sameAs"
                        >
                          Connect on LinkedIn →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our AI-First Values</h2>
              <p className="text-white/70 text-lg">The principles that guide our AI-powered web development approach</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-Powered Innovation",
                  description:
                    "Every project leverages cutting-edge AI technology, from GPT-4 integration to machine learning models that deliver measurable business value.",
                  gradient: "from-cyan-500 to-blue-600",
                  icon: Brain,
                  keywords: "AI innovation, GPT-4, machine learning",
                },
                {
                  title: "Performance Excellence",
                  description:
                    "Lightning-fast Next.js applications optimized for Core Web Vitals, SEO, and conversion rates that never compromise on visual excellence.",
                  gradient: "from-purple-500 to-pink-600",
                  icon: Zap,
                  keywords: "Next.js performance, Core Web Vitals, SEO optimization",
                },
                {
                  title: "Human-Centered Design",
                  description:
                    "Complex AI systems made intuitive through user research, accessibility standards, and inclusive design principles.",
                  gradient: "from-green-500 to-emerald-600",
                  icon: Users,
                  keywords: "UX design, accessibility, inclusive design",
                },
                {
                  title: "Transparent Development",
                  description:
                    "Clear communication, agile methodologies, and collaborative processes that keep clients informed throughout the AI development journey.",
                  gradient: "from-orange-500 to-red-600",
                  icon: Target,
                  keywords: "agile development, client collaboration, transparency",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-8 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.gradient} p-3 mb-4 relative z-10`}>
                        <value.icon className="w-full h-full text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{value.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4 relative z-10">{value.description}</p>

                      <div className="text-xs text-cyan-400/60 relative z-10">Focus: {value.keywords}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats with SEO */}
        <section className="py-24 px-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Axora by the Numbers</h2>
              <p className="text-white/70 text-lg">Measurable results from our AI-powered web development expertise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "150+",
                  label: "AI Projects Delivered",
                  description: "Custom AI web applications and chatbots",
                },
                {
                  number: "300%",
                  label: "Average ROI Increase",
                  description: "Measurable business growth for clients",
                },
                { number: "25+", label: "Industry Awards", description: "Recognition for AI innovation and design" },
                { number: "99.9%", label: "Uptime Guarantee", description: "Reliable AI-powered web applications" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  )
}
