export const DEFAULT_GUIDES = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js App Router",
    summary: "Create a modern Next.js app with robust project structure and best practices.",
    tags: ["nextjs", "react", "setup"],
    content: `# Next.js App Router Starter

- Create project
- Add UI library
- Configure absolute imports and ESLint
- Build your first API route`,
    steps: [
      "Create app: npx create-next-app@latest my-app --ts --eslint",
      "Install shadcn/ui and Tailwind",
      "Set up src alias and strict mode",
      "Create health check route at /api/health",
    ],
    commands: [
      "npx create-next-app@latest my-app --ts",
      "cd my-app && npm i class-variance-authority clsx tailwind-merge",
    ],
    code: `// app/api/health/route.ts
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, service: "api", ts: Date.now() });
}`,
    language: "typescript",
  },
  {
    slug: "debugging-javascript",
    title: "Debugging JavaScript Like a Pro",
    summary: "Master breakpoints, stepping, and variable inspection.",
    tags: ["javascript", "debugging"],
    content: `# Debugging
Use DevTools and VS Code debugger to inspect runtime behavior.`,
    steps: [
      "Open DevTools → Sources",
      "Set breakpoints",
      "Use step controls and watch expressions",
    ],
    code: `function compute(a, b) {
  // Try placing a breakpoint here
  const sum = a + b;
  return { sum, time: new Date().toISOString() };
}
console.log(compute(2, 5));`,
    language: "javascript",
  },
  {
    slug: "sql-optimization",
    title: "Optimizing SQL Queries",
    summary: "Use EXPLAIN, correct indexes, and smaller result sets.",
    tags: ["sql", "database", "performance"],
    content: `# SQL Performance
Inspect query plan, add indexes to filter/join columns, avoid SELECT *.`,
    steps: ["Run EXPLAIN", "Add indexes", "Audit unused/duplicate indexes"],
    code: `SELECT name, email FROM users WHERE created_at > '2024-01-01' ORDER BY created_at DESC;`,
    language: "sql",
  },
] as const;
