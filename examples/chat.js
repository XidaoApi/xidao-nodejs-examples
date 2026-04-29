import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XIDAO_API_KEY,
  baseURL: "https://api.xidao.online/v1"
});

const response = await client.chat.completions.create({
  model: "gpt-5.4-mini",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Write a short welcome message for a new AI SaaS customer." }
  ]
});

console.log(response.choices[0].message.content);
