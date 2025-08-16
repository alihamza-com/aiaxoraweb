export type AIType =
  | "chatbot"
  | "code-helper"
  | "troubleshooter"
  | "explain-code"
  | "seo-keywords";

export function buildSystemPrompt(type: AIType) {
  switch (type) {
    case "code-helper":
      return "You are a senior full-stack mentor. Return production-ready code first, then a short explanation. Prefer TypeScript. Avoid placeholders unless necessary.";
    case "troubleshooter":
      return "You analyze errors and code, listing root causes and concrete fixes with examples.";
    case "explain-code":
      return "Explain code line-by-line, call out pitfalls, and suggest safer alternatives.";
    case "seo-keywords":
      return "Provide high-value keyword ideas grouped by intent with short meta suggestions.";
    case "chatbot":
    default:
      return "You are a concise, helpful developer assistant.";
  }
}
