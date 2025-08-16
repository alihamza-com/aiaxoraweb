"use client";

import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Terminal,
  ChevronRight,
  Play,
  MessageSquareText,
  Loader2,
  Sparkles,
  HelpCircle,
  Copy,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { DEFAULT_GUIDES } from "@/lib/guides";
import AIHelperPanel from "./AIHelperPanel";
import GuideStep from "./GuideStep";
import GuideToolbar from "./GuideToolbar";

// Monaco editor is heavy — load on demand
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

type GuideType = (typeof DEFAULT_GUIDES)[number] & {
  commands?: string[];
};

export default function DeveloperGuidesPage() {
  const [tab, setTab] = useState<"guides" | "reader" | "assistant">("guides");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(DEFAULT_GUIDES[0]?.slug ?? null);

  const [aiPrompt, setAiPrompt] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const activeGuide: GuideType | null = useMemo(
    () => DEFAULT_GUIDES.find((g) => g.slug === selected) || null,
    [selected]
  );

  const filteredGuides = useMemo(() => {
    const q = search.toLowerCase().trim();
    return DEFAULT_GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search]);

  async function askAI(customPrompt?: string, type: string = "chatbot") {
    const prompt = (customPrompt ?? aiPrompt).trim();
    if (!prompt) return;
    setLoading(true);
    setAiAnswer("");
    try {
      const res = await fetch("/api/ai-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, type }),
      });
      if (!res.ok) throw new Error("AI error");
      const data = await res.json();
      setAiAnswer(data.content || "No answer returned.");
      setTab("assistant");
    } catch {
      setAiAnswer("The assistant is unavailable right now. Please try again shortly.");
      setTab("assistant");
    } finally {
      setLoading(false);
    }
  }

  function explainCurrentSection() {
    if (!activeGuide) return;
    const prompt =
      `Explain this guide clearly with bullet points and short examples.\n` +
      `TITLE: ${activeGuide.title}\n` +
      `SUMMARY: ${activeGuide.summary}\n` +
      `TAGS: ${activeGuide.tags.join(", ")}\n` +
      `STEPS: ${activeGuide.steps?.join(" | ") || "N/A"}\n` +
      `CONTENT:\n${activeGuide.content}`;
    askAI(prompt, "chatbot");
  }

  // Keyboard shortcuts (Cmd/Ctrl+K focus search, Cmd/Ctrl+Enter ask AI)
  const searchRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Cmd/Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTab("guides");
        searchRef.current?.focus();
      }
      // Cmd/Ctrl+Enter
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        if (tab === "assistant") {
          askAI();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, aiPrompt]);

  const copyText = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-20 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Developer{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Guides
          </span>
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Your all-in-one hub for coding solutions, live editing, and instant help.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-xs font-medium">Smart Assistant Ready</span>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto">
        <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 bg-white/5 border border-white/10">
            <TabsTrigger value="guides" className="data-[state=active]:bg-white/10">
              <BookOpen className="w-4 h-4 mr-2" /> Guides
            </TabsTrigger>
            <TabsTrigger value="reader" className="data-[state=active]:bg-white/10">
              <Terminal className="w-4 h-4 mr-2" /> Reader
            </TabsTrigger>
            <TabsTrigger value="assistant" className="data-[state=active]:bg-white/10">
              <MessageSquareText className="w-4 h-4 mr-2" /> Assistant
            </TabsTrigger>
          </TabsList>

          {/* Guides tab */}
          <TabsContent value="guides" className="mt-8">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2 text-cyan-400" />
                  Browse Guides
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input
                    ref={searchRef}
                    placeholder="Search guides, tags, topics... (⌘/Ctrl+K)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-white/50"
                  />
                  <Button
                    onClick={() => setSearch("")}
                    variant="outline"
                    className="border-white/20 text-white"
                  >
                    Clear
                  </Button>
                </div>

                <ul className="divide-y divide-white/10 rounded-lg overflow-hidden border border-white/10">
                  {filteredGuides.map((g) => (
                    <li key={g.slug} className="bg-white/5">
                      <button
                        onClick={() => {
                          setSelected(g.slug);
                          setTab("reader");
                        }}
                        className="w-full text-left px-4 py-4 hover:bg-white/10 transition flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="font-semibold">{g.title}</div>
                          <div className="text-sm text-white/70 mt-1">{g.summary}</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {g.tags.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2 py-0.5 rounded-full bg-slate-800 border border-white/10 text-white/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 opacity-60 mt-1" />
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reader tab */}
          <TabsContent value="reader" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/5 border border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                    {activeGuide?.title || "Select a guide"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {activeGuide ? (
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-semibold text-white/90">Overview</div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyText(activeGuide.content)}
                          >
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <pre className="whitespace-pre-wrap leading-relaxed text-white/90">
                          {activeGuide.content}
                        </pre>
                      </div>

                      {activeGuide.steps?.length ? (
                        <div>
                          <div className="font-semibold mb-2 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Steps
                          </div>
                          <ol className="list-decimal list-inside space-y-1 text-white/90">
                            {activeGuide.steps.map((s: any, i :any) => (
                              <GuideStep key={i} index={i + 1} text={s} />
                            ))}
                          </ol>
                        </div>
                      ) : null}

                      {activeGuide.code ? (
                        <div className="rounded-lg border border-white/10 overflow-hidden">
                          <GuideToolbar
                            language={activeGuide.language || "plaintext"}
                            onExplain={() =>
                              askAI(
                                `Explain this code with annotations and potential pitfalls:\n\n${activeGuide.code}`,
                                "explain-code"
                              )
                            }
                            onOptimize={() =>
                              askAI(
                                `Refactor and optimize the following code. Explain changes briefly, keep it production-grade:\n\n${activeGuide.code}`,
                                "code-helper"
                              )
                            }
                            onTroubleshoot={() =>
                              askAI(
                                `Find bugs and edge cases in this code. Provide fixes:\n\n${activeGuide.code}`,
                                "troubleshooter"
                              )
                            }
                            onCopy={() => copyText(activeGuide.code || "")}
                          />
                          <MonacoEditor
                            height="360px"
                            language={activeGuide.language || "plaintext"}
                            value={activeGuide.code}
                            theme="vs-dark"
                            options={{
                              minimap: { enabled: false },
                              fontSize: 14,
                              lineNumbers: "on",
                              scrollBeyondLastLine: false,
                              wordWrap: "on",
                              automaticLayout: true,
                            }}
                          />
                        </div>
                      ) : null}

                      {activeGuide.commands?.length ? (
                        <div>
                          <div className="font-semibold mb-2 flex items-center">
                            <Terminal className="w-4 h-4 mr-2" />
                            Commands
                          </div>
                          <div className="space-y-2">
                            {activeGuide.commands.map((c :any, i :any ) => (
                              <code
                                key={i}
                                className="block p-3 rounded bg-slate-900/60 border border-white/10 text-sm overflow-x-auto"
                              >
                                {c}
                              </code>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="text-white/70">
                      Choose a guide from the list to start reading.
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-cyan-400" /> Need an explanation?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={explainCurrentSection} className="w-full">
                    <Play className="w-4 h-4 mr-2" /> Explain this section
                  </Button>
                  <p className="text-xs text-white/60">
                    Context-aware: uses the current guide content and steps.
                  </p>
                  <AIHelperPanel
                    onAsk={(p :any, t :any) => askAI(p, t)}
                    quickPrompts={[
                      {
                        label: "Summarize",
                        build: () =>
                          `Summarize this guide for a beginner:\n${activeGuide?.content}`,
                        type: "chatbot",
                      },
                      {
                        label: "Generate Example",
                        build: () =>
                          `Generate a minimal working example related to:\n${activeGuide?.title}`,
                        type: "code-helper",
                      },
                      {
                        label: "Common Errors",
                        build: () =>
                          `List common errors and fixes for:\n${activeGuide?.title}\nSteps:\n${activeGuide?.steps?.join("\n")}`,
                        type: "troubleshooter",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Assistant tab */}
          <TabsContent value="assistant" className="mt-8">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquareText className="w-5 h-5 mr-2 text-emerald-400" />
                  Smart Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  ref={textareaRef}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ask about Next.js, React, Node, SQL, testing, design patterns, deployments…"
                  className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder-white/50"
                />
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() => askAI()}
                    disabled={!aiPrompt.trim() || loading}
                    className="flex-1"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Thinking…
                      </>
                    ) : (
                      <>Ask</>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      askAI(
                        `Write production-ready code for this request. Add brief explanation first:\n\n${aiPrompt}`,
                        "code-helper"
                      )
                    }
                    disabled={!aiPrompt.trim() || loading}
                  >
                    Get Code
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      askAI(
                        `Find issues and edge cases in this code or idea. Provide fixes:\n\n${aiPrompt}`,
                        "troubleshooter"
                      )
                    }
                    disabled={!aiPrompt.trim() || loading}
                  >
                    Troubleshoot
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setAiPrompt("")}
                    disabled={loading}
                  >
                    Clear
                  </Button>
                </div>

                {aiAnswer && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-lg bg-slate-900/60 border border-white/10"
                  >
                    <pre className="whitespace-pre-wrap leading-relaxed text-white/90">
                      {aiAnswer}
                    </pre>
                    <div className="text-[10px] text-white/40 mt-2">
                      Response generated by your private assistant
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
