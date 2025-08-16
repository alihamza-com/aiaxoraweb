"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Wand2, FileText, Search, Palette, Copy, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomCursor from "@/components/custom-cursor"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

export default function PlaygroundPage() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Playground
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Experiment with our real Groq-powered AI tools. Generate content, create wireframes, find keywords, and
                design logos - all powered by lightning-fast AI inference.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Live AI Tools - Powered by Groq</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="text-generator" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/5 backdrop-blur-md border border-white/10">
                <TabsTrigger value="text-generator" className="data-[state=active]:bg-white/10">
                  <FileText className="w-4 h-4 mr-2" />
                  AI Writer
                </TabsTrigger>
                <TabsTrigger value="wireframe-generator" className="data-[state=active]:bg-white/10">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Wireframes
                </TabsTrigger>
                <TabsTrigger value="seo-finder" className="data-[state=active]:bg-white/10">
                  <Search className="w-4 h-4 mr-2" />
                  SEO Keywords
                </TabsTrigger>
                <TabsTrigger value="logo-creator" className="data-[state=active]:bg-white/10">
                  <Palette className="w-4 h-4 mr-2" />
                  Logo Creator
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <TabsContent value="text-generator">
                  <AITextGenerator />
                </TabsContent>
                <TabsContent value="wireframe-generator">
                  <WireframeGenerator />
                </TabsContent>
                <TabsContent value="seo-finder">
                  <SEOKeywordFinder />
                </TabsContent>
                <TabsContent value="logo-creator">
                  <LogoConceptCreator />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        <Footer />
        <FloatingActions />
        <ChatWidget />
      </main>
    </>
  )
}

function AITextGenerator() {
  const [prompt, setPrompt] = useState("")
  const [generatedText, setGeneratedText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    try {
      const response = await fetch("/api/ai-generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Write professional content about: ${prompt}`,
          type: "content-generation",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate content")
      }

      const data = await response.json()
      setGeneratedText(data.content)
    } catch (error) {
      console.error("AI Generation Error:", error)
      setGeneratedText(
        `Here's compelling content about ${prompt}:\n\nIn today's rapidly evolving digital landscape, ${prompt} represents a significant opportunity for businesses to innovate and grow. By leveraging cutting-edge AI technology and human-centered design principles, organizations can create meaningful experiences that resonate with their audience and drive measurable results.`,
      )
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-white/5 backdrop-blur-md border border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            AI Content Writer
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">LIVE</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                What would you like to write about?
              </label>
              <Input
                placeholder="e.g., AI transforming healthcare, sustainable technology trends..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-white/50"
                onKeyPress={(e) => e.key === "Enter" && !isGenerating && handleGenerate()}
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating with Groq AI...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Content
                </>
              )}
            </Button>
          </div>

          {generatedText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">AI Generated Content</h3>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white/90 leading-relaxed whitespace-pre-wrap">{generatedText}</p>
              </div>
              <div className="text-xs text-white/40 text-center">Generated by Groq's Llama3-8B model</div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SEOKeywordFinder() {
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateKeywords = async () => {
    if (!topic.trim()) return

    setIsGenerating(true)

    try {
      const response = await fetch("/api/ai-generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Generate 10 SEO keywords for: ${topic}. Focus on high-value, commercial intent keywords that businesses would search for. Return only the keywords, separated by commas.`,
          type: "seo-keywords",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate keywords")
      }

      const data = await response.json()
      const keywordList = data.content
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean)
      setKeywords(keywordList)
    } catch (error) {
      console.error("Keyword Generation Error:", error)
      // Fallback keywords
      const fallbackKeywords = [
        `${topic} services`,
        `${topic} solutions`,
        `${topic} consulting`,
        `${topic} development`,
        `${topic} optimization`,
        `${topic} strategy`,
        `${topic} automation`,
        `${topic} analytics`,
        `${topic} best practices`,
        `${topic} expert`,
      ]
      setKeywords(fallbackKeywords)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-white/5 backdrop-blur-md border border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-green-400" />
            AI SEO Keyword Generator
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-2">LIVE</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Enter your topic or industry</label>
              <Input
                placeholder="e.g., AI chatbots, web design, digital marketing..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-white/50"
                onKeyPress={(e) => e.key === "Enter" && !isGenerating && generateKeywords()}
              />
            </div>

            <Button
              onClick={generateKeywords}
              disabled={isGenerating || !topic.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Finding Keywords with AI...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Find Keywords
                </>
              )}
            </Button>
          </div>

          {keywords.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">AI Generated SEO Keywords</h3>
                <Button
                  onClick={() => navigator.clipboard.writeText(keywords.join(", "))}
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm cursor-pointer hover:bg-green-500/30 transition-colors"
                    onClick={() => navigator.clipboard.writeText(keyword)}
                    title="Click to copy"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
              <div className="text-xs text-white/40 text-center">Generated by Groq AI • Click any keyword to copy</div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function WireframeGenerator() {
  const [pages, setPages] = useState("Home, About, Services, Contact")
  const [wireframe, setWireframe] = useState("")

  const generateWireframe = () => {
    const pageList = pages
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean)
    let result = ""

    pageList.forEach((page, index) => {
      result += `
┌─────────────────────────────────────┐
│ ${page.toUpperCase().padEnd(35)} │
├─────────────────────────────────────┤
│                                     │
│  [LOGO]           [NAVIGATION]      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           [HERO SECTION]            │
│        ${page} Main Content         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  [CONTENT BLOCK 1] [CONTENT BLOCK 2]│
│                                     │
├─────────────────────────────────────┤
│                                     │
│            [CALL TO ACTION]         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│              [FOOTER]               │
│                                     │
└─────────────────────────────────────┘

`
    })

    setWireframe(result)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-white/5 backdrop-blur-md border border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-purple-400" />
            Wireframe Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Enter page names (comma-separated)</label>
              <Input
                placeholder="Home, About, Services, Portfolio, Contact"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-white/50"
              />
            </div>

            <Button
              onClick={generateWireframe}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Wireframes
            </Button>
          </div>

          {wireframe && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Generated Wireframes</h3>
                <Button
                  onClick={() => navigator.clipboard.writeText(wireframe)}
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-white/10 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono whitespace-pre">{wireframe}</pre>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function LogoConceptCreator() {
  const [brandName, setBrandName] = useState("Axora")
  const [colorPalette, setColorPalette] = useState("#06b6d4,#8b5cf6,#10b981")
  const [seed, setSeed] = useState(1)

  const generateLogo = () => {
    setSeed(Math.floor(Math.random() * 1000))
  }

  const colors = colorPalette
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean)

  const seededRandom = (seed: number, index: number) => {
    const x = Math.sin(seed * 9999 + index * 1234) * 10000
    return x - Math.floor(x)
  }

  const shapes = Array.from({ length: 5 }, (_, i) => {
    const x = 50 + seededRandom(seed, i) * 200
    const y = 50 + seededRandom(seed, i + 10) * 100
    const size = 20 + seededRandom(seed, i + 20) * 40
    const color = colors[Math.floor(seededRandom(seed, i + 30) * colors.length)] || "#06b6d4"
    const opacity = 0.3 + seededRandom(seed, i + 40) * 0.5

    return { x, y, size, color, opacity }
  })

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card className="bg-white/5 backdrop-blur-md border border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Palette className="w-5 h-5 text-orange-400" />
            Logo Concept Creator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Brand Name</label>
              <Input
                placeholder="Enter brand name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-white/50"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Color Palette (comma-separated hex codes)
              </label>
              <Input
                placeholder="#06b6d4,#8b5cf6,#10b981"
                value={colorPalette}
                onChange={(e) => setColorPalette(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder-white/50"
              />
            </div>
          </div>

          <Button
            onClick={generateLogo}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold"
          >
            <Palette className="w-4 h-4 mr-2" />
            Generate New Concept
          </Button>

          <motion.div
            key={seed}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">Logo Concept</h3>
            <div className="p-8 rounded-lg bg-white border border-white/10 flex items-center justify-center">
              <svg width="300" height="200" viewBox="0 0 300 200" className="w-full max-w-sm">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {shapes.map((shape, index) => (
                  <circle
                    key={index}
                    cx={shape.x}
                    cy={shape.y}
                    r={shape.size}
                    fill={shape.color}
                    opacity={shape.opacity}
                    filter="url(#glow)"
                  />
                ))}

                <text
                  x="150"
                  y="170"
                  textAnchor="middle"
                  fill={colors[0] || "#06b6d4"}
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  {brandName}
                </text>
              </svg>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  const svg = document.querySelector("svg")
                  if (svg) {
                    const svgData = new XMLSerializer().serializeToString(svg)
                    navigator.clipboard.writeText(svgData)
                  }
                }}
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy SVG
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
