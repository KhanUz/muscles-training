import 'dotenv/config'


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD-2zTOaqkdLqPSw6cdIqeLG6OUWRIcu5g" });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
}


main();