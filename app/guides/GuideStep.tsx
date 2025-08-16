"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GuideStep({ index, text }: { index: number; text: string }) {
  const [open, setOpen] = useState(true);
  return (
    <li className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-white/10"
      >
        <ChevronRight
          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
        />
        <span className="font-medium">Step {index}</span>
      </button>
      {open && <div className="px-4 pb-3 text-white/90">{text}</div>}
    </li>
  );
}
