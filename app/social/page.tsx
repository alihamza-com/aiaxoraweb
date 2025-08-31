"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/custom-cursor";
import FloatingActions from "@/components/floating-actions";
import ChatWidget from "@/components/chat-widget";
import { posts } from "../data/posts";

// Social media posts embed list
const socialPosts = posts.map(post => ({
  title: post.title,
  date: post.date,
  embedHtml: post.embedHtml,
  gradient: post.gradient,
  url: post.url,
}));

function ResponsiveEmbed({ html }: { html: string }) {
  return (
    <div
      className="[&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:border-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function SocialPostsPage() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our {" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Social Posts
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Stay updated with our latest posts from LinkedIn and other platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Post Embed */}
                      <div className="relative overflow-hidden">
                        <ResponsiveEmbed html={post.embedHtml} />
                        <div className="absolute top-4 left-4">
                          {/* <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                            {post.date}
                          </span> */}
                        </div>
                      </div>

                      {/* Post Info */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                        <div className="flex gap-3">
                          <Button
                            className={`flex-1 bg-gradient-to-r ${post.gradient} hover:opacity-90 text-white font-semibold`}
                            asChild
                          >
                            <Link href={post.url}>
                              <ExternalLink className="w-4 h-4 mr-2" /> View Post
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

        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  );
}
