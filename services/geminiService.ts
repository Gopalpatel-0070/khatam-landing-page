
import { GoogleGenAI, Type } from "@google/genai";

export const getGeminiWisdom = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful assistant. Explain the context and practical lesson behind the phrase 'Tata Bye Bye Khatam - Time rahte use kar lena chahiye tha' clearly and concisely. Respond in JSON format.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: {
              type: Type.STRING,
              description: "A clear explanation of the quote's meaning."
            }
          },
          required: ["advice"]
        }
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      advice: "Time is valuable. Use opportunities while they last."
    };
  }
};
