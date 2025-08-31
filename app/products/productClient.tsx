"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/custom-cursor";
import FloatingActions from "@/components/floating-actions";
import ChatWidget from "@/components/chat-widget";
import Footer from "@/components/footer";
const products = [
  {
    id: 1,
    title: "ERP  Software",
    description:
      "Drop-in conversational widgets with custom personalities and advanced AI capabilities. Perfect for customer support, lead generation, and user engagement.",
    features: [
      "Custom AI Personalities",
      "Multi-language Support",
      "Analytics Dashboard",
      "Easy Integration",
    ],
    preview: "/erp2.png",
    demoUrl: "/https://axorawebschool.vercel.app/",
    category: "AI Solutions",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "School Managment Software",
    description:
      "Complete Next.js application templates with authentication, database integration, and modern UI components. Get your project started in minutes.",
    features: [
      "Next.js 14 + TypeScript",
      "Authentication Ready",
      "Database Integration",
      "Modern UI Components",
    ],
    preview: "/smartschool360.png",
    demoUrl: "#",
    category: "Development Tools",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Custom Website Templete",
    description:
      "Pre-built workflow automations for content operations, lead management, and business processes. Save hours of manual work every week.",
    features: [
      "Workflow Automation",
      "API Integrations",
      "Custom Triggers",
      "Analytics & Reporting",
    ],
    preview: "/digital.png",
    demoUrl: "#",
    category: "Business Tools",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "Digital markting ",
    description:
      "Complete brand identity packages with logos, color palettes, typography, and brand guidelines. Everything you need to establish a strong brand presence.",
    features: [
      "Logo Variations",
      "Color Palettes",
      "Typography System",
      "Brand Guidelines",
    ],
    preview: "/digitalmarkitingportfolio.png",
    demoUrl: "#",
    category: "Design Assets",
    gradient: "from-orange-500 to-red-600",
  },
];

export default function ProductsPage() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Ready-to-use solutions and templates that accelerate your
                development process and enhance your digital presence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Product Preview */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={product.preview || "/placeholder.svg"}
                          alt={product.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Demo Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="lg"
                            className={`bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold rounded-full`}
                            asChild
                          >
                            <Link href={product.demoUrl}>
                              <Play className="w-5 h-5 mr-2" />
                              Live Preview
                            </Link>
                          </Button>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {product.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Key Features
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
                                <span className="text-white/80 text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            className={`flex-1 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold`}
                            asChild
                          >
                            <Link href={product.demoUrl}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Try Demo
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                            asChild
                          >
                            <Link href="/contact">Request Access</Link>
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-white/70 text-lg">
                Built with the same attention to detail as our custom projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Production Ready",
                  description:
                    "All products are thoroughly tested and optimized for production environments.",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  title: "Easy Integration",
                  description:
                    "Simple setup process with comprehensive documentation and support.",
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  title: "Regular Updates",
                  description:
                    "Continuous improvements and new features based on user feedback.",
                  gradient: "from-green-500 to-emerald-600",
                },
              ].map((feature, index) => (
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
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4`}
                      >
                        <div className="w-full h-full bg-white/20 rounded-lg" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">{feature.description}</p>
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
                Ready to Accelerate Your Project?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Get access to our premium products and start building faster
                than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">Request Access</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/playground">Try Demo</Link>
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
