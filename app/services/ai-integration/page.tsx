"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Bot,
  Brain,
  CheckCircle,
  ArrowRight,
  Code,
  Network,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/custom-cursor";
import ParticleSystem from "@/components/particle-system";
import FloatingActions from "@/components/floating-actions";
import ChatWidget from "@/components/chat-widget";
import Footer from "@/components/footer";
import {
  SiOpenai,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiFineco,
  SiHuggingface,
} from "react-icons/si";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description:
      "Custom AI assistants powered by GPT and other LLMs to automate customer interactions.",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Custom Knowledge Base",
      "Multi-Channel Support",
      "Natural Language Understanding",
      "24/7 Availability",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description:
      "Streamline workflows with intelligent automation powered by AI & ML.",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Process Automation",
      "Document Processing",
      "Task Scheduling",
      "Predictive Actions",
    ],
  },
  {
    icon: Network,
    title: "AI Data & Analytics",
    description:
      "Harness AI to gain deeper insights from your business data.",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Predictive Analytics",
      "Sentiment Analysis",
      "Anomaly Detection",
      "Real-time Dashboards",
    ],
  },
];

const packages = [
  {
    name: "Basic AI Bot",
    price: "$25",
    duration: "2-3 weeks",
    description: "Simple AI chatbot with predefined responses and core NLP.",
    features: [
      "Single Platform",
      "Basic NLP Model",
      "Custom Branding",
      "Knowledge Base Setup",
      "Email Support (1 Month)",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    name: "Pro AI Automation",
    price: "$50",
    duration: "4-6 weeks",
    description:
      "Advanced AI assistant with integrations and automation workflows.",
    features: [
      "Multi-Platform",
      "Advanced NLP/LLM",
      "API Integrations",
      "Data Analytics",
      "6 Months Support",
    ],
    gradient: "from-green-500 to-emerald-500",
    popular: true,
  },
  {
    name: "Enterprise AI Suite",
    price: "$100+",
    duration: "8-12 weeks",
    description:
      "Full AI solution with custom training, integrations, and admin dashboard.",
    features: [
      "Custom AI Models",
      "Enterprise Integrations",
      "Advanced Security",
      "Dedicated Dashboard",
      "12 Months Support",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
];

const technologies = [
  {
    name: "OpenAI",
    logo: <SiOpenai size={40} color="#10A37F" />,
    description: "LLMs & NLP Models",
  },
  {
    name: "LangChain",
    logo: <SiLangchain size={40} color="#FFB300" />,
    description: "LLM Orchestration",
  },
  {
    name: "TensorFlow",
    logo: <SiTensorflow size={40} color="#FF6F00" />,
    description: "ML Framework",
  },
  {
    name: "PyTorch",
    logo: <SiPytorch size={40} color="#EE4C2C" />,
    description: "Deep Learning",
  },
  {
    name: "Pinecone",
    logo: <SiFineco size={40} color="#5E9CFF" />,
    description: "Vector Database",
  },
  {
    name: "Hugging Face",
    logo: <SiHuggingface size={40} color="#FFD21E" />,
    description: "AI Models Hub",
  },
];

export default function AIIntegrationsPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                AI Integrations
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                VIP-Level
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  AI Integrations
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                We integrate cutting-edge AI into your products and workflows,
                boosting efficiency, intelligence, and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
                  asChild
                >
                  <Link href="/contact">Start Your AI Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View AI Projects</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
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
                AI Integration Services
              </h2>
              <p className="text-gray-300 text-lg">
                Tailored AI solutions to meet your unique business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
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

        {/* Technologies */}
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
                Industry-leading AI tools and frameworks
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
                        {tech.logo}
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

        {/* Packages */}
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
                AI Integration Packages
              </h2>
              <p className="text-gray-300 text-lg">
                Flexible plans for every stage of your AI journey
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

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Integrate AI into Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build intelligent solutions that transform your business
                and deliver real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Start Your AI Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg bg-transparent"
                  asChild
                >
                  <Link href="/portfolio">View AI Work</Link>
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
