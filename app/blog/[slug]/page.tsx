"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPost = {
  title: "The Future of AI in Web Design: Beyond Templates and Themes",
  excerpt:
    "Exploring how artificial intelligence is revolutionizing web design, from automated layouts to personalized user experiences that adapt in real-time.",
  coverImage: "/placeholder.svg?height=600&width=1200&text=AI+Web+Design+Future",
  author: "Alex Rivera",
  publishDate: "2024-12-15",
  readTime: "8 min read",
  category: "AI & Design",
  content: `
# The Future of AI in Web Design: Beyond Templates and Themes

The landscape of web design is undergoing a revolutionary transformation. As artificial intelligence becomes more sophisticated, we're witnessing the emergence of design tools and methodologies that go far beyond traditional templates and themes.

## The Current State of AI in Design

Today's AI design tools are already impressive. From automated color palette generation to intelligent layout suggestions, we're seeing the first wave of AI-powered creativity. But this is just the beginning.

### Key Areas of Innovation

**1. Personalized User Experiences**
AI is enabling websites to adapt in real-time based on user behavior, preferences, and context. Imagine a website that automatically adjusts its layout, content, and visual hierarchy based on how each individual user interacts with it.

**2. Automated Design Systems**
Modern AI can now generate comprehensive design systems, including typography scales, color palettes, and component libraries that maintain consistency across entire digital ecosystems.

**3. Content-Aware Layouts**
Advanced algorithms can analyze content and automatically generate layouts that optimize for readability, engagement, and conversion rates.

## The Technical Implementation

Implementing AI-driven design requires a sophisticated understanding of both machine learning and user experience principles. Here's how we approach it at Axora:

\`\`\`javascript
// Example: AI-powered layout optimization
const optimizeLayout = async (userBehaviorData, contentType) => {
  const aiModel = await loadLayoutOptimizationModel()
  const recommendations = await aiModel.predict({
    userEngagement: userBehaviorData.engagement,
    contentLength: contentType.wordCount,
    deviceType: userBehaviorData.device,
    timeOfDay: new Date().getHours()
  })
  
  return recommendations.optimalLayout
}
\`\`\`

## Challenges and Considerations

While AI offers incredible possibilities, it also presents unique challenges:

- **Maintaining Brand Identity**: Ensuring AI-generated designs align with brand guidelines
- **Accessibility**: Making sure automated designs meet accessibility standards
- **Performance**: Balancing AI capabilities with site performance
- **User Privacy**: Implementing personalization while respecting user data

## Looking Ahead

The future of AI in web design will likely include:

1. **Real-time A/B Testing**: AI systems that continuously test and optimize design elements
2. **Voice-Driven Design**: Interfaces that adapt based on voice commands and natural language
3. **Emotional Intelligence**: Designs that respond to user emotional states
4. **Cross-Platform Consistency**: AI that maintains design coherence across all touchpoints

## Conclusion

As we stand on the brink of this AI-driven design revolution, it's clear that the future belongs to those who can successfully blend human creativity with artificial intelligence. The goal isn't to replace designers but to augment their capabilities, allowing for more innovative, personalized, and effective digital experiences.

At Axora, we're committed to staying at the forefront of this evolution, creating web experiences that are not just visually stunning but intelligently adaptive to each user's needs.

---

*What are your thoughts on AI in web design? Share your experiences and predictions in the comments below.*
  `,
}

const relatedPosts = [
  {
    title: "Mastering Cinematic Scrolling: Creating Story-Driven Web Experiences",
    slug: "cinematic-scrolling-techniques",
    image: "/placeholder.svg?height=200&width=300&text=Cinematic+Scrolling",
  },
  {
    title: "Glassmorphism in 2024: Implementation Guide and Best Practices",
    slug: "glassmorphism-design-trend",
    image: "/placeholder.svg?height=200&width=300&text=Glassmorphism+Guide",
  },
  {
    title: "AI-Powered Content Strategy: Scaling Creativity with Intelligence",
    slug: "ai-powered-content-strategy",
    image: "/placeholder.svg?height=200&width=300&text=AI+Content+Strategy",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const shareUrl = `https://axora.dev/blog/${params.slug}`

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Article Header */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>

              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold">
                  {blogPost.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{blogPost.title}</h1>

              <div className="flex items-center gap-6 text-white/60 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPost.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime}
                </div>
                <span>By {blogPost.author}</span>
              </div>

              <p className="text-xl text-white/70 leading-relaxed">{blogPost.excerpt}</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={blogPost.coverImage || "/placeholder.svg"}
                alt={blogPost.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  <div
                    className="text-white/90 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: blogPost.content
                        .replace(/\n/g, "<br>")
                        .replace(/#{1}\s(.+)/g, '<h1 class="text-3xl font-bold text-white mt-12 mb-6">$1</h1>')
                        .replace(/#{2}\s(.+)/g, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
                        .replace(/#{3}\s(.+)/g, '<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>')
                        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                        .replace(
                          /```javascript([\s\S]*?)```/g,
                          '<pre class="bg-slate-800 p-4 rounded-lg overflow-x-auto my-6"><code class="text-green-400 text-sm">$1</code></pre>',
                        )
                        .replace(
                          /`(.+?)`/g,
                          '<code class="bg-slate-800 px-2 py-1 rounded text-cyan-400 text-sm">$1</code>',
                        ),
                    }}
                  />
                </motion.article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Share Buttons */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share Article
                      </h3>
                      <div className="space-y-3">
                        <Button
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() =>
                            window.open(
                              `https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogPost.title}`,
                              "_blank",
                            )
                          }
                        >
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          size="sm"
                          className="w-full bg-blue-800 hover:bg-blue-900 text-white"
                          onClick={() =>
                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
                          }
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          size="sm"
                          className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                          onClick={() =>
                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
                          }
                        >
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Table of Contents */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold mb-4">Table of Contents</h3>
                      <nav className="space-y-2 text-sm">
                        <a href="#current-state" className="block text-white/70 hover:text-cyan-400 transition-colors">
                          The Current State of AI in Design
                        </a>
                        <a
                          href="#technical-implementation"
                          className="block text-white/70 hover:text-cyan-400 transition-colors"
                        >
                          The Technical Implementation
                        </a>
                        <a href="#challenges" className="block text-white/70 hover:text-cyan-400 transition-colors">
                          Challenges and Considerations
                        </a>
                        <a href="#looking-ahead" className="block text-white/70 hover:text-cyan-400 transition-colors">
                          Looking Ahead
                        </a>
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                            {post.title}
                          </h3>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0"
                            asChild
                          >
                            <Link href={`/blog/${post.slug}`}>Read Article →</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md border border-white/10">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Enjoyed this article?</h2>
                  <p className="text-white/70 mb-8">
                    Subscribe to our newsletter for more insights on AI, web design, and digital innovation.
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  )
}
