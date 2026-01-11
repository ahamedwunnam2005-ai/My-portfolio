
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAssistantResponse = async (userMessage: string) => {
  try {
    const context = `
      You are an AI assistant for ${PORTFOLIO_DATA.name}'s portfolio website.
      User Data:
      Name: ${PORTFOLIO_DATA.name}
      Title: ${PORTFOLIO_DATA.title}
      Bio: ${PORTFOLIO_DATA.bio}
      Education: ${JSON.stringify(PORTFOLIO_DATA.education)}
      Projects: ${JSON.stringify(PORTFOLIO_DATA.projects)}
      Experience: ${JSON.stringify(PORTFOLIO_DATA.experience)}
      Skills: ${JSON.stringify(PORTFOLIO_DATA.skills)}

      Instructions:
      1. Answer questions concisely and professionally as an assistant.
      2. If asked about something not in the data, politely state that you only know about ${PORTFOLIO_DATA.name}'s academic and professional background.
      3. Be helpful and friendly.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is temporarily unavailable. Please try again later.";
  }
};
