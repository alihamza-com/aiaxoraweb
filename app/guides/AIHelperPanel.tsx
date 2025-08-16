"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

type Quick = { label: string; build: () => string; type?: string };

export default function AIHelperPanel({
  onAsk,
  quickPrompts = [],
}: {
  onAsk: (prompt: string, type?: string) => Promise<void> | void;
  quickPrompts?: Quick[];
}) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk(type?: string) {
    if (!prompt.trim()) return;
    setLoading(true);
    await onAsk(prompt, type);
    setLoading(false);
  }

  return (
    <div className="space-y-3">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask questions about this section…"
        className="bg-white/5 border-white/20 text-white placeholder-white/50"
      />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => handleAsk("chatbot")} disabled={loading}>
          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
          Ask
        </Button>
        <Button
          variant="outline"
          onClick={() => setPrompt("")}
          disabled={loading}
        >
          Clear
        </Button>
        {quickPrompts.map((q) => (
          <Button
            key={q.label}
            size="sm"
            variant="secondary"
            onClick={() => onAsk(q.build(), q.type)}
            disabled={loading}
          >
            {q.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
