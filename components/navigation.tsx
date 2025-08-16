"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code, Phone, Mail, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services", 
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-apps" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Ai Integration", href: "/services/ai-integration" },
    { name: "eCommerce Stores", href: "/services/ecommerce" },
    ]

  },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false) // for desktop dropdown
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.png"/>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Axora
              </span>
              <div className="text-xs text-blue-600 font-medium -mt-1 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Web Solution
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
                    pathname === item.href
                      ? "text-blue-600"
                      : scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-300"
                  }`}
                  onMouseEnter={() => item.dropdown && setServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setServicesOpen(false)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu (Desktop) */}
                {item.dropdown && servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-blue  rounded-lg shadow-lg border border-gray-200 p-2 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          pathname === subItem.href
                            ? "bg-blue-50 text-blue-600"
                            : "text-white hover:bg-gray-100 hover:text-blue-600"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="tel:+923245237429"
                className={`flex items-center gap-1 transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-gray-300 hover:text-blue-300"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+92 324 523 7429</span>
              </a>
              <a
                href="mailto:alihamza@meezansoftwarehouse.com"
                className={`flex items-center gap-1 transition-colors ${
                  scrolled ? "text-gray-600 hover:text-blue-600" : "text-gray-300 hover:text-blue-300"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {/* If dropdown, show nested links */}
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full flex justify-between items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                          pathname.startsWith("/services")
                            ? "text-blue-600 bg-blue-50 border border-blue-200"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 mt-2 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                                  pathname === subItem.href
                                    ? "text-blue-600 bg-blue-50 border border-blue-200"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-4 border-t border-gray-200 space-y-3"
              >
                <a
                  href="tel:+923245237429"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+92 324 523 7429</span>
                </a>
                <a
                  href="mailto:alihamza@meezansoftwarehouse.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>alihamza@meezansoftwarehouse.com</span>
                </a>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
