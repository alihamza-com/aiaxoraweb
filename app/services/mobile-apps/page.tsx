"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  SmartphoneIcon as Android,
  CheckCircle,
  ArrowRight,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/custom-cursor";
import ParticleSystem from "@/components/particle-system";
import FloatingActions from "@/components/floating-actions";
import ChatWidget from "@/components/chat-widget";
import Footer from "@/components/footer";
import { FaReact, FaAws } from "react-icons/fa";
import { SiFlutter, SiSwift, SiKotlin, SiFirebase } from "react-icons/si";

const appTypes = [
  {
    icon: Smartphone,
    title: "Native iOS Apps",
    description: "Swift-based iOS applications optimized for iPhone and iPad",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Swift Programming",
      "iOS SDK",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    icon: Android,
    title: "Native Android Apps",
    description: "Kotlin/Java Android applications for Google Play Store",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Kotlin/Java",
      "Android SDK",
      "Material Design",
      "Google Services",
    ],
  },
  {
    icon: Code,
    title: "Cross-Platform Apps",
    description: "React Native and Flutter apps for both iOS and Android",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "React Native",
      "Flutter",
      "Single Codebase",
      "Native Performance",
    ],
  },
];

const packages = [
  {
    name: "Basic Mobile App",
    price: "$20",
    duration: "6-8 weeks",
    description: "Simple app with core functionality",
    features: [
      "Single Platform (iOS or Android)",
      "5-7 Core Screens",
      "Basic UI/UX Design",
      "API Integration",
      "App Store Submission",
      "3 Months Support",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional App",
    price: "$35",
    duration: "10-12 weeks",
    description: "Feature-rich app for both platforms",
    features: [
      "iOS & Android Platforms",
      "10-15 Custom Screens",
      "Advanced UI/UX Design",
      "Backend Development",
      "Push Notifications",
      "Analytics Integration",
      "6 Months Support",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "$50+",
    duration: "16-20 weeks",
    description: "Complex enterprise mobile solution",
    features: [
      "Multi-Platform Support",
      "Custom Backend System",
      "Advanced Security",
      "Third-party Integrations",
      "Admin Dashboard",
      "Performance Monitoring",
      "12 Months Support",
      "Maintenance & Updates",
    ],
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
];

const technologies = [
  {
    name: "React Native",
    logo: <FaReact size={40} color="#61DAFB" />,
    description: "Cross-platform development",
  },
  {
    name: "Flutter",
    logo: <SiFlutter size={40} color="#02569B" />,
    description: "Google's UI toolkit",
  },
  {
    name: "Swift",
    logo: <SiSwift size={40} color="#FA7343" />,
    description: "Native iOS development",
  },
  {
    name: "Kotlin",
    logo: <SiKotlin size={40} color="#7F52FF" />,
    description: "Modern Android development",
  },
  {
    name: "Firebase",
    logo: <SiFirebase size={40} color="#FFCA28" />,
    description: "Backend services",
  },
  {
    name: "AWS",
    logo: <FaAws size={40} color="#FF9900" />,
    description: "Cloud infrastructure",
  },
];

export default function MobileAppsPage() {
  return (
    <>
      <CustomCursor />
      <ParticleSystem />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6"
              >
                <Smartphone className="w-4 h-4" />
                Mobile App Development
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your business with custom mobile applications. We
                develop native iOS, Android, and cross-platform apps that engage
                users and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  asChild
                >
                  <Link href="/contact">Start Your App</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Apps</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Mobile App Development Services
              </h2>
              <p className="text-gray-300 text-lg">
                Native and cross-platform solutions for every business need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {appTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${type.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <type.icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {type.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{type.description}</p>
                      <ul className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-300"
                          >
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

        {/* Technologies Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-gray-300 text-lg">
                Cutting-edge tools and frameworks for mobile development
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {tech.logo} {/* React Icon component */}
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Mobile App Development Packages
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the perfect solution for your mobile app project
              </p>
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
                      pkg.popular
                        ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                        : "border-white/10"
                    } hover:border-white/20`}
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {pkg.name}
                        </h3>
                        <div className="text-4xl font-black text-white mb-2">
                          {pkg.price}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">
                          {pkg.duration}
                        </p>
                        <p className="text-gray-400">{pkg.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3 text-gray-300"
                          >
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

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your mobile app idea and create a solution that
                engages your users and grows your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Start Your App
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View Our Apps</Link>
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
  );
}
