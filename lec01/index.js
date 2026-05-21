import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAzZR0Z05RTos90uAQNhSJytOPntU4z0LA"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: [
        {
            role:'user',
            parts:[{text:"what is my name"}]
        },
         {
            role:'model',
            parts:[{text:"I don't know your name yet! Since I don't have access to your personal information, you'll have to tell me. What should I call you?"}]
        },
         {
            role:'user',
            parts:[{text:"My name is bishwajeet singh"}]
        },
         {
            role:'model',
            parts:[{text:"Your name is **Bishwajeet Singh**! It's nice to meet you, Bishwajeet. How can I help you today?"}]
        },
    ],
  });
  console.log(response.text);
}

await main();