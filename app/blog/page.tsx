"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-web-design",
    title: "The Future of AI in Web Design: Beyond Templates and Themes",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing web design, from automated layouts to personalized user experiences that adapt in real-time.",
    coverImage: "/aiArticle.png",
    author: "Alex Rivera",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "AI & Design",
    featured: true,
  },
  {
    id: 2,
    slug: "cinematic-scrolling-techniques",
    title: "Mastering Cinematic Scrolling: Creating Story-Driven Web Experiences",
    excerpt:
      "Learn advanced techniques for implementing scroll-triggered animations that tell compelling stories and keep users engaged throughout their journey.",
    coverImage: "/aiArticle.png",
    author: "Rhea Santos",
    publishDate: "2024-12-10",
    readTime: "12 min read",
    category: "Web Development",
    featured: false,
  },
  {
    id: 3,
    slug: "glassmorphism-design-trend",
    title: "Glassmorphism in 2024: Implementation Guide and Best Practices",
    excerpt:
      "A comprehensive guide to implementing glassmorphism effects in modern web applications, including performance considerations and accessibility.",
    coverImage: "/aiArticle.png",
    author: "Zara Chen",
    publishDate: "2024-12-05",
    readTime: "10 min read",
    category: "Design Trends",
    featured: false,
  },
  {
    id: 4,
    slug: "ai-powered-content-strategy",
    title: "AI-Powered Content Strategy: Scaling Creativity with Intelligence",
    excerpt:
      "How to leverage AI tools for content creation while maintaining brand voice and human creativity in your digital marketing strategy.",
    coverImage: "/aiArticle.png",
    author: "Orion Blake",
    publishDate: "2024-11-28",
    readTime: "15 min read",
    category: "Digital Strategy",
    featured: false,
  },
  {
    id: 5,
    slug: "performance-optimization-nextjs",
    title: "Next.js Performance Optimization: From Good to Lightning Fast",
    excerpt:
      "Advanced techniques for optimizing Next.js applications, including image optimization, code splitting, and server-side rendering strategies.",
    coverImage: "/aiArticle.png",
    author: "Alex Rivera",
    publishDate: "2024-11-20",
    readTime: "18 min read",
    category: "Web Development",
    featured: false,
  },
  {
    id: 6,
    slug: "brand-identity-digital-age",
    title: "Building Brand Identity in the Digital Age: A Complete Guide",
    excerpt:
      "Essential strategies for creating cohesive brand identities that work across all digital touchpoints, from websites to social media.",
    coverImage: "/aiArticle.png",
    author: "Zara Chen",
    publishDate: "2024-11-15",
    readTime: "14 min read",
    category: "Branding",
    featured: false,
  },
]

const categories = ["All", "AI & Design", "Web Development", "Design Trends", "Digital Strategy", "Branding"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Insights, tutorials, and thoughts on the future of web design, AI technology, and digital innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold">
                    Featured Article
                  </span>
                </div>

                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          width={600}
                          height={400}
                          className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h2>

                        <p className="text-white/70 leading-relaxed mb-6">{featuredPost.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-white/60">By {featuredPost.author}</span>
                          <Button
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold"
                            asChild
                          >
                            <Link href={`/blog/${featuredPost.slug}`}>
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.coverImage }
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-white/60 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">By {post.author}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0"
                            asChild
                          >
                            <Link href={`/blog/${post.slug}`}>
                              Read More
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
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

        {/* Newsletter Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
                <CardContent className="p-12">
                  <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
                  <p className="text-xl text-white/70 mb-8">
                    Get the latest insights on AI, web design, and digital innovation delivered to your inbox.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full">
                      Subscribe
                    </Button>
                  </div>

                  <p className="text-white/50 text-sm mt-4">No spam, unsubscribe at any time.</p>
                </CardContent>
              </Card>
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
