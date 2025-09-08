"use client";
import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  Loader2,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomCursor from "@/components/custom-cursor";
import FloatingActions from "@/components/floating-actions";
import ChatWidget from "@/components/chat-widget";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import { toast } from "@/hooks/use-toast";



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAutoFilling, setIsAutoFilling] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAutoFill = async () => {
    if (!formData.project.trim()) return;

    setIsAutoFilling(true);

    try {
      const response = await fetch("/api/ai-generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Generate a professional business inquiry message for a project about note only to the point anser wrt not any other thing : ${formData.project}. Include interest in web development services, mention specific needs, and request a consultation. Keep it professional and concise. for best regard use ${formData.name}${formData.email}`,
          type: "content-generation",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();

      setFormData((prev) => ({
        ...prev,
        name: "John Smith",
        email: "john.smith@company.com",
        phone: "+1 234 567 8900",
        company: "Tech Innovations Inc.",
        message: data.content,
        budget: "$20 - $120",
      }));
    } catch (error) {
      console.error("AI Generation Error:", error);
      // Fallback content
      setFormData((prev) => ({
        ...prev,
        name: "John Smith",
        email: "john.smith@company.com",
        phone: "+1 234 567 8900",
        company: "Tech Innovations Inc.",
        message: `Hi Axora team! I'm interested in discussing a project related to ${formData.project}. We're looking for a professional partner who can help us bring our vision to life with modern web technologies and exceptional design. I'd love to schedule a consultation to explore how we can work together.`,
        budget: "$20 - $120",
      }));
    } finally {
      setIsAutoFilling(false);
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "✅ Success",
        description: "Your project was submitted successfully.",
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: "",
        message: "",
        budget: "",
      });
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setSubmitStatus("error");
    toast({
      title: "❌ Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                <MessageSquare className="w-4 h-4" />
                Let's Work Together
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Next Project?
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your vision and create something extraordinary
                together. Get a free consultation and detailed project proposal.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">24h Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">4.9/5 Client Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Ready to transform your digital presence? We're here to help
                    bring your ideas to life. Whether you need a complete
                    digital transformation or want to enhance your existing
                    presence, our team is ready to collaborate.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 flex-shrink-0">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Email Us
                      </h3>
                      <a
                        href="mailto:axoraweb.services@gmail.com"
                        className="text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        axoraweb.services@gmail.com
                      </a>
                      <p className="text-gray-400 text-sm">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex-shrink-0">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Call Us
                      </h3>
                      <a
                        href="tel:+923245237429"
                        className="text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        +92 3245237429
                      </a>
                      <p className="text-gray-400 text-sm">
                        Available 9 AM - 6 PM PKT
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 flex-shrink-0">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Visit Us
                      </h3>
                      <p className="text-green-300">Lahore, Pakistan</p>
                      <p className="text-gray-400 text-sm">
                        Remote consultations available worldwide
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Connect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10"
                >
                  <h3 className="text-white font-semibold mb-4">
                    Quick Connect
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold flex-1"
                      onClick={() =>
                        window.open("https://wa.me/923245237429", "_blank")
                      }
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-1"
                      onClick={() =>
                        window.open(
                          "mailto:axoraweb.services@gmail.com",
                          "_blank"
                        )
                      }
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                >
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PKT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PKT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Start Your Project
                    </h2>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">
                            Message sent successfully!
                          </span>
                        </div>
                        <p className="text-green-200 text-sm mt-1">
                          We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-red-300">
                          <X className="w-5 h-5" />
                          <span className="font-semibold">
                            Failed to send message
                          </span>
                        </div>
                        <p className="text-red-200 text-sm mt-1">
                          Please try again or contact us directly.
                        </p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Phone
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+92 300 1234567"
                            className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Company
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Project Type
                          </label>
                          <select
                            name="project"
                            value={formData.project}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-blue-400 transition-colors"
                          >
                            <option value="" className="bg-gray-800">
                              Select project type
                            </option>
                            <option
                              value="Web Development"
                              className="bg-gray-800"
                            >
                              Web Development
                            </option>
                            <option value="Mobile App" className="bg-gray-800">
                              Mobile App
                            </option>
                            <option value="E-commerce" className="bg-gray-800">
                              E-commerce
                            </option>
                            <option
                              value="AI Integration"
                              className="bg-gray-800"
                            >
                              AI Integration
                            </option>
                            <option
                              value="Digital Marketing"
                              className="bg-gray-800"
                            >
                              Digital Marketing
                            </option>
                            <option value="Other" className="bg-gray-800">
                              Other
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-blue-400 transition-colors"
                          >
                            <option value="" className="bg-gray-800">
                              Select budget range
                            </option>
                            <option
                              value="$1,000 - $20"
                              className="bg-gray-800"
                            >
                              $1,000 - $20
                            </option>
                            <option value="$20 - $120" className="bg-gray-800">
                              $20 - $120
                            </option>
                            <option
                              value="$120 - $50,000"
                              className="bg-gray-800"
                            >
                              $120 - $50,000
                            </option>
                            <option value="$50,000+" className="bg-gray-800">
                              $50,000+
                            </option>
                          </select>
                        </div>
                      </div>

                      {formData.project && (
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            AI Auto-Fill Message
                          </label>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              onClick={handleAutoFill}
                              disabled={isAutoFilling}
                              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold disabled:opacity-50"
                            >
                              {isAutoFilling ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Generating...
                                </>
                              ) : (
                                "Generate Message with AI"
                              )}
                            </Button>
                          </div>
                          <p className="text-xs text-white/40 mt-1">
                            Let AI help you write a professional project
                            description
                          </p>
                        </div>
                      )}

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          rows={6}
                          className="bg-white/5 border-white/20 text-white placeholder-white/50 resize-none focus:border-blue-400 transition-colors"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg disabled:opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message & Get Free Quote
                          </>
                        )}
                      </Button>

                      <p className="text-center text-white/60 text-sm">
                        By submitting this form, you agree to our privacy
                        policy. We'll never share your information with third
                        parties.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Quick answers to help you get started
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer:
                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our consultation.",
                },
                {
                  question: "Do you work with international clients?",
                  answer:
                    "We work with clients worldwide and are experienced in managing projects across different time zones. We use modern collaboration tools to ensure smooth communication.",
                },
                {
                  question: "What's included in your development services?",
                  answer:
                    "Our services include strategy, design, development, testing, deployment, and 3 months of free support. We also provide training and comprehensive documentation.",
                },
                {
                  question: "Can you help improve my existing website?",
                  answer:
                    "Yes! We can audit, optimize, redesign, or completely rebuild existing websites. We'll assess your current site and recommend the best approach for your goals and budget.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "We specialize in modern web technologies including React, Next.js, Node.js, Python, and various databases. We also integrate AI services and third-party APIs as needed.",
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer:
                    "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support starting from $500/month.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
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
  );
}
