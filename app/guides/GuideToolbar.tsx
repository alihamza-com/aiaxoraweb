"use client";

import { Button } from "@/components/ui/button";
import { Wand2, Wrench, Info, Copy } from "lucide-react";

export default function GuideToolbar({
  language,
  onExplain,
  onOptimize,
  onTroubleshoot,
  onCopy,
}: {
  language: string;
  onExplain: () => void;
  onOptimize: () => void;
  onTroubleshoot: () => void;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-slate-900/70 border-b border-white/10">
      <div className="text-xs uppercase tracking-wide text-white/60">
        {language.toUpperCase()} Editor
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={onExplain}>
          <Info className="w-4 h-4 mr-1" /> Explain
        </Button>
        <Button size="sm" variant="outline" onClick={onTroubleshoot}>
          <Wrench className="w-4 h-4 mr-1" /> Troubleshoot
        </Button>
        <Button size="sm" variant="secondary" onClick={onOptimize}>
          <Wand2 className="w-4 h-4 mr-1" /> Optimize
        </Button>
        <Button size="sm" variant="ghost" onClick={onCopy} title="Copy code">
          <Copy className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
