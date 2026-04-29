import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XIDAO_API_KEY,
  baseURL: "https://api.xidao.online/v1"
});

const history = [
  { role: "system", content: "You are a concise assistant for SaaS support." },
  { role: "user", content: "A customer asks how to lower AI API cost without rewriting their app." }
];

const response = await client.chat.completions.create({
  model: "gpt-5.4-mini",
  messages: history
});

console.log(response.choices[0].message.content);
