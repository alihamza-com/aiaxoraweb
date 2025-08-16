"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Wand2, Loader2 } from "lucide-react"

export default function AIDemo() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [demoText, setDemoText] = useState("Click 'Generate' to see real AI in action!")
  const [prompt, setPrompt] = useState("")

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setDemoText("Please enter a prompt to generate content with AI.")
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/ai-generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          type: "content-generation",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate content")
      }

      const data = await response.json()
      setDemoText(data.content)
    } catch (error) {
      console.error("AI Generation Error:", error)
      setDemoText(
        "🚀 AI is transforming your digital presence with cutting-edge technology and personalized experiences that drive engagement and deliver measurable results for your business growth.",
      )
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Real AI Power
            </span>
          </h2>
          <p className="text-xl text-white/70">
            See how our Groq-powered AI technology transforms your content in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Live AI Content Generator
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">LIVE</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Section */}
              <div className="space-y-4">
                <label htmlFor="ai-prompt" className="block text-white/80 font-medium">
                  Enter your prompt for AI generation:
                </label>
                <input
                  id="ai-prompt"
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Write about AI transforming web development..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  onKeyPress={(e) => e.key === "Enter" && !isGenerating && handleGenerate()}
                />
              </div>

              {/* Output Section */}
              <motion.div
                className="min-h-[120px] p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10"
                animate={{
                  background: isGenerating
                    ? "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))"
                    : "linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-white/90 text-lg leading-relaxed"
                  key={demoText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {demoText}
                </motion.p>
              </motion.div>

              <div className="flex justify-center">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating with AI...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Generate with Groq AI
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center text-white/60 text-sm">Powered by Groq's lightning-fast AI inference</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
