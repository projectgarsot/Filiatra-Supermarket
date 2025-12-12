import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Chef Filos" (Σεφ Φίλος), a friendly and knowledgeable culinary assistant for Super Market Filiatron P.G. Alexandropoulos in Greece.
Your goal is to help customers plan meals using ingredients typically found in a Greek supermarket (AB Food Market franchise).
IMPORTANT: ALWAYS REPLY IN GREEK.
- Suggest recipes based on ingredients the user has.
- Highlight local Greek products (Messinian olive oil, feta, etc.).
- Keep responses concise, encouraging, and formatted with bullet points for readability.
- If asked about store hours or location, refer them to the Contact section of the website.
- Do not make up prices.
`;

export const generateRecipeAdvice = async (userQuery: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please select an API key to use the Recipe Assistant.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash for speed and efficiency in a chat context
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Συγγνώμη, δεν μπορώ να δημιουργήσω μια συνταγή αυτή τη στιγμή. Παρακαλώ δοκιμάστε ξανά.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};