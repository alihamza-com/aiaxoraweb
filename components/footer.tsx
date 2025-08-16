"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Facebook,
  ArrowRight,
  Heart,
  Brain,
  TrendingUp,
  FileText,
  Shield,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  Lock,
  Cpu,
  Award,
  Users,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"

const footerLinks = {
  services: [
    { name: "Custom Web Development", href: "/services/web-development", icon: Code },
    { name: "Mobile App Development", href: "/services/mobile-apps", icon: Smartphone },
    { name: "E-commerce Solutions", href: "/services/ecommerce", icon: Monitor },
    { name: "AI Integration", href: "/services/ai-integration", icon: Brain },
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp },
    { name: "Technical Support", href: "/services/support", icon: Shield },
  ],
  technologies: [
    { name: "React & Next.js", href: "/tech/react-nextjs", icon: Code },
    { name: "Node.js & Python", href: "/tech/backend", icon: Database },
    { name: "Cloud Solutions", href: "/tech/cloud", icon: Cloud },
    { name: "AI & Machine Learning", href: "/tech/ai-ml", icon: Cpu },
    { name: "Mobile Development", href: "/tech/mobile", icon: Smartphone },
    { name: "Security & Performance", href: "/tech/security", icon: Lock },
  ],
  company: [
    { name: "About Our Team", href: "/about" },
    { name: "Portfolio & Case Studies", href: "/portfolio" },
    { name: "Client Testimonials", href: "/testimonials" },
    { name: "Career Opportunities", href: "/careers" },
    { name: "Press & Media", href: "/press" },
    { name: "Partner Program", href: "/partners" },
  ],
  resources: [
    { name: "Development Blog", href: "/blog" },
    { name: "Free Tools & Resources", href: "/resources" },
    { name: "API Documentation", href: "/docs" },
    { name: "Developer Guides", href: "/guides" },
    { name: "Community Forum", href: "/community" },
    { name: "Knowledge Base", href: "/kb" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/axorawebsoftwarehouse", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/axorawebcompany", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/axoraweb", color: "hover:text-pink-500" },
  { name: "Github", icon: Github, href: "https://github.com/alihamza-com", color: "hover:text-gray-300" },
]

const awards = [
  { name: "Top Developer", badge: "2024", icon: "🏆", description: "Best Web Development Agency" },
  { name: "Client Choice", badge: "98%", icon: "⭐", description: "Client Satisfaction Rate" },
  { name: "Fast Delivery", badge: "24h", icon: "⚡", description: "Average Response Time" },
  { name: "Global Reach", badge: "50+", icon: "🌍", description: "Countries Served" },
]

const stats = [
  { number: "500+", label: "Projects Completed", icon: Award },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "98%", label: "Success Rate", icon: TrendingUp },
  { number: "24/7", label: "Support Available", icon: Shield },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    // Simulate newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setEmail("")
    setIsSubscribing(false)
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-pink-500/3 rounded-full blur-3xl" />

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

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full mb-6 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white font-semibold">Trusted by Businesses Worldwide</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Success Story
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 text-center relative overflow-hidden">
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="text-4xl font-black text-white mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>

                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl border border-white/20 backdrop-blur-2xl relative overflow-hidden">
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
              <motion.h2 className="text-4xl lg:text-5xl font-black text-white mb-6" whileHover={{ scale: 1.02 }}>
                Stay Ahead with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Tech Insights
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Get exclusive insights on web development, AI innovation, and cutting-edge technologies delivered
                weekly.
              </motion.p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for tech insights"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/50 h-14 px-6 rounded-full backdrop-blur-md focus:border-blue-400 transition-colors"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubscribing ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5"
                    >
                      ⏳
                    </motion.div>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-white/40 text-sm mt-4">
                Join 120+ developers and business leaders. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-white/60 uppercase tracking-wider text-sm font-semibold">
              Industry Recognition & Achievements
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group text-center"
                title={award.description}
              >
                <motion.div
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {award.icon}
                </motion.div>
                <div>
                  <div className="text-2xl font-black text-white mb-1">{award.badge}</div>
                  <p className="text-white font-semibold text-sm">{award.name}</p>
                  <p className="text-white/60 text-xs mt-1">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
<div className="w-20 h-20  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
           <img src="/logo.png"/>
            </div>
              <div>
                <span className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                  Axora
                </span>
                <div className="text-sm text-blue-300 font-semibold -mt-1">Web Solution</div>
              </div>
            </Link>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Leading web development agency delivering exceptional digital experiences with cutting-edge technology and
              innovative design.
            </p>

            <div className="space-y-4">
              

              <motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <a href="tel:+923245237429" className="font-medium">
                    +92 3245237429
                  </a>
                  <div className="text-xs text-gray-400">9 AM - 6 PM PKT</div>
                </div>
              </motion.div>
<motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <a href="mailto:alihamza@meezansoftwarehouse.com" className="font-medium">
                    alihamza@meezansoftwarehouse.com
                  </a>
                  <div className="text-xs text-gray-400">24h response time</div>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3 text-gray-300 group" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="font-medium">Lahore, Pakistan</span>
                  <div className="text-xs text-gray-400">Serving worldwide</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-white font-black mb-6 text-lg flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-200 text-sm flex items-center gap-3 group py-1"
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-400/50 rounded-full group-hover:bg-blue-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-white font-black mb-6 text-lg flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              Technologies
            </h3>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-200 text-sm flex items-center gap-3 group py-1"
                  >
                    <motion.div
                      className="w-2 h-2 bg-purple-400/50 rounded-full group-hover:bg-purple-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-white font-black mb-6 text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 text-sm flex items-center gap-3 group py-1"
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400/50 rounded-full group-hover:bg-green-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-white font-black mb-6 text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-300 transition-colors duration-200 text-sm flex items-center gap-3 group py-1"
                  >
                    <motion.div
                      className="w-2 h-2 bg-orange-400/50 rounded-full group-hover:bg-orange-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>© 2024 Axora Web Solution. Professional Web Development Agency.</span>
              <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                <span>Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>in Pakistan</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20`}
                  whileHover={{ y: -5, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Back to Top
                <ArrowRight className="ml-2 w-4 h-4 rotate-[-90deg]" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
