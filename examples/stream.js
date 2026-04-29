import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XIDAO_API_KEY,
  baseURL: "https://api.xidao.online/v1"
});

const stream = await client.chat.completions.create({
  model: "gpt-5.4-mini",
  stream: true,
  messages: [
    { role: "system", content: "Answer clearly." },
    { role: "user", content: "Explain why OpenAI-compatible APIs help developers migrate faster." }
  ]
});

for await (const part of stream) {
  const token = part.choices?.[0]?.delta?.content;
  if (token) process.stdout.write(token);
}
process.stdout.write("\n");
