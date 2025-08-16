"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Clock,
  Star,
  Gift,
  Sparkles,
  Trophy,
  Globe,
  Loader2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface OrderData {
  service: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  description: string;
}

export default function OrderPlacementModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [hasShownModal, setHasShownModal] = useState(false);
   const [errors, setError] = useState('');
  const [orderData, setOrderData] = useState<OrderData>({
    service: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAutoFilling, setIsAutoFilling] = useState(false);
  useEffect(() => {
    // Check if modal has already been shown in this session
    const modalShownThisSession = sessionStorage.getItem(
      "axora-modal-shown-this-session"
    );
    const orderPlaced = localStorage.getItem("axora-order-placed");

    // Don't show if already shown this session or order already placed
    if (modalShownThisSession || orderPlaced || hasShownModal) {
      return;
    }

    let hasScrolled = false;

    const handleScroll = () => {
      // Show modal when user scrolls down at least 300px (indicating engagement)
      if (!hasScrolled && window.scrollY > 300 && !hasShownModal) {
        hasScrolled = true;
        setHasShownModal(true);
        setShowModal(true);

        // Mark as shown in this session to prevent showing again
        sessionStorage.setItem("axora-modal-shown-this-session", "true");

        // Remove scroll listener after showing once
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShownModal]);

  const services = [
    {
      id: "web-development",
      name: "Custom Web Development",
      price: "Starting from $30",
      originalPrice: "$35",
      popular: true,
      badge: "Most Popular",
      features: [
        "Modern React/Next.js",
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Admin Panel",
      ],
      icon: "🚀",
      savings: "40% OFF",
    },
    {
      id: "mobile-app",
      name: "Mobile App Development",
      price: "Starting from $35",
      originalPrice: "$7,999",
      popular: false,
      badge: "Premium",
      features: [
        "iOS & Android",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
        "Analytics",
      ],
      icon: "📱",
      savings: "37% OFF",
    },
    {
      id: "ecommerce",
      name: "E-commerce Solutions",
      price: "Starting from $50",
      originalPrice: "$5,999",
      popular: true,
      badge: "Best Value",
      features: [
        "Payment Gateway",
        "Inventory System",
        "Admin Dashboard",
        "Mobile Optimized",
        "Marketing Tools",
      ],
      icon: "🛒",
      savings: "42% OFF",
    },
    {
      id: "digital-marketing",
      name: "SEO Content writing",
      price: "Starting from $20/mo",
      originalPrice: "$30/mo",
      popular: false,
      badge: "Growth",
      features: [
        "SEO Optimization",
        "Social Media",
        "PPC Campaigns",
        "Content Marketing",
        "Analytics",
      ],
      icon: "📈",
      savings: "33% OFF",
    },
  ];

  const handleServiceSelect = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId);
    setOrderData((prev) => ({ ...prev, service: service?.name || "" }));
    setCurrentStep(2);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setOrderData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: orderData.name,
          email: orderData.email,
          phone: orderData.phone,
          company: orderData.company,
          project: orderData.service,
          budget: orderData.budget,
          message: `Timeline: ${orderData.timeline}\n\nProject Description:\n${orderData.description}`,
        }),
      });

      if (response.ok) {
        setCurrentStep(3);
        localStorage.setItem("axora-order-placed", "true");
      }
    } catch (error) {
      setError(`${error}`)
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentStep(1);
    setOrderData({
      service: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      description: "",
    });
  };

  const handleAutoFill = async () => {
    setIsAutoFilling(true);

    try {
      const response = await fetch("/api/ai-generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Generate a professional business inquiry message 2 3 line and in structer   for a project about ${orderData.budget}. Include interest in web development services, mention specific needs, and request a consultation. Keep it professional and concise. Use ${orderData.name} and ${orderData.email}.`,
          type: "content-generation",
        }),
      });

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      console.log("AI content:", data.content);

      setOrderData((prev) => ({
        ...prev,
        description: data.content || prev.description, // only update if AI sends something
      }));
      
      console.log(orderData,"ordersT")

    } catch (error) {
      console.error("AI Generation Error:", error);
      setOrderData((prev) => ({
        ...prev,
        description: ` Hi Axora team! I'm interested in discussing a project related to ${prev.service}. We're looking for a professional partner who can help us bring our vision to life with modern web technologies and exceptional design. I'd love to schedule a consultation to explore how we can work together.`,
      }));
    } finally {
      setIsAutoFilling(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto relative"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Header */}
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                      Start Your Dream Project
                      <Gift className="w-6 h-6 text-red-500" />
                    </h2>
                    <p className="text-gray-600 mt-1 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Trusted by 500+ international clients worldwide
                    </p>
                  </div>
                </div>
                <Button
                  onClick={closeModal}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Special Offer Banner */}
              <div className="mt-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        🎉 Limited Time Offer!
                      </h3>
                      <p className="text-sm opacity-90">
                        Get up to 40% OFF + Free consultation worth $500
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">40% OFF</div>
                    <div className="text-xs opacity-90">Expires in 24h</div>
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center mt-8 justify-center">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        currentStep >= step
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {currentStep > step ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-20 h-1 mx-3 rounded-full transition-all duration-300 ${
                          currentStep > step
                            ? "bg-gradient-to-r from-blue-600 to-purple-600"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Choose Your Service
                    </h3>
                    <p className="text-gray-600">
                      Select the perfect solution for your business needs
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card
                          className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 group relative overflow-hidden"
                          onClick={() => handleServiceSelect(service.id)}
                        >
                          <div className="absolute top-4 right-4 z-10">
                            {service.popular && (
                              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                {service.badge}
                              </span>
                            )}
                          </div>

                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                              {service.savings}
                            </span>
                          </div>

                          <CardContent className="p-6">
                            <div className="text-center mb-4">
                              <div className="text-4xl mb-2">
                                {service.icon}
                              </div>
                              <h4 className="font-bold text-xl text-gray-900 mb-2">
                                {service.name}
                              </h4>
                              <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-gray-400 line-through text-sm">
                                  {service.originalPrice}
                                </span>
                                <span className="text-2xl font-bold text-blue-600">
                                  {service.price}
                                </span>
                              </div>
                            </div>

                            <ul className="space-y-2 mb-6">
                              {service.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <div className="flex items-center justify-center mb-4">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                              <span className="text-gray-600 text-sm ml-2">
                                (4.9/5 rating)
                              </span>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl group-hover:scale-105 transition-transform">
                              Select This Service
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>500+ Happy Clients</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>100% Money Back Guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Tell Us About Your Project
                    </h3>
                    <p className="text-gray-600">
                      Selected:{" "}
                      <span className="font-semibold text-blue-600">
                        {orderData.service}
                        
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={orderData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={orderData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={orderData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 1234567"
                          className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={orderData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={orderData.budget}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        >
                          <option value="">Select budget range</option>
                          <option value="$2,000 - $20">$2,000 - $20</option>
                          <option value="$20 - $120">$20 - $120</option>
                          <option value="$120 - $50,000">$120 - $50,000</option>
                          <option value="$50,000+">$50,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={orderData.timeline}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP (Rush)">ASAP (Rush)</option>
                          <option value="2-4 weeks">2-4 weeks</option>
                          <option value="1-2 months">1-2 months</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>
                    </div>

                    {orderData.timeline && (
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <ReactQuill
                        theme="snow"
                        value={orderData.description}
                        onChange={(value) =>
                          setOrderData((prev) => ({
                            
                            ...prev,
                            
                            description: value,
                          }))
                        }
                        placeholder="Describe your project requirements..."
                        className="bg-white rounded-xl border border-gray-200"
                        style={{ minHeight: "200px" }}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        className="flex-1 h-12 border-2 border-gray-300 hover:border-gray-400 rounded-xl"
                      >
                        Back to Services
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </div>
                        ) : (
                          <>
                            Submit Project Request
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Success */}
              {currentStep === 3 && (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    🎉 Project Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                    Thank you for choosing Axora Web Solution! We've received
                    your project details for{" "}
                    <span className="font-semibold text-blue-600">
                      {orderData.service}
                    </span>{" "}
                    and our expert team will get back to you within 24 hours
                    with a detailed proposal and timeline.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-blue-50 rounded-2xl">
                      <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        Quick Response
                      </h4>
                      <p className="text-sm text-gray-600">
                        24-hour response guarantee
                      </p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-2xl">
                      <Shield className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        Quality Assured
                      </h4>
                      <p className="text-sm text-gray-600">
                        International standards
                      </p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-2xl">
                      <Zap className="w-10 h-10 text-green-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">
                        Fast Delivery
                      </h4>
                      <p className="text-sm text-gray-600">
                        On-time completion
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">
                      What happens next?
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <span className="text-gray-700">
                          We'll review your requirements within 24 hours
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <span className="text-gray-700">
                          Schedule a free consultation call to discuss details
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <span className="text-gray-700">
                          Receive a detailed proposal with timeline and pricing
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() =>
                        window.open("https://wa.me/923245237429", "_blank")
                      }
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl"
                    >
                      💬 WhatsApp Us Now
                    </Button>
                    <Button
                      onClick={closeModal}
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-xl bg-transparent"
                    >
                      Continue Browsing
                    </Button>
                  </div>

                  <p className="text-gray-500 text-sm mt-6">
                    Need immediate assistance? Call us at{" "}
                    <a
                      href="tel:+923245237429"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      +92 324 523 7429
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
