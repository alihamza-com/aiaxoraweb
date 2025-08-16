export async function generateAIContent(prompt: string, type = "content-generation") {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, type }),
  });
  
  if (!res.ok) throw new Error("AI request failed");
  const data = await res.json();
  return data.content;
}
