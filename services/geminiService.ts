
import { GoogleGenAI } from "@google/genai";
import { GeneratedNLSContent } from "../types";

export const generateCompetencyIntegration = async (prompt: string): Promise<GeneratedNLSContent> => {
  // Always use process.env.API_KEY directly as required by the guidelines.
  if (!process.env.API_KEY) {
    throw new Error("API Key chưa được cấu hình.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Using 'gemini-3-pro-preview' for complex pedagogical reasoning tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        temperature: 0.4,
        topP: 0.9,
      }
    });

    // Access the .text property directly (not as a method).
    if (response.text) {
      return parseStructuredResponse(response.text);
    } else {
      throw new Error("Không nhận được phản hồi từ AI.");
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(`Lỗi AI: ${error.message || error}`);
  }
};

/**
 * Parses the custom delimited text format into the GeneratedNLSContent object
 */
function parseStructuredResponse(text: string): GeneratedNLSContent {
  const result: GeneratedNLSContent = {
    objectives_addition: "",
    materials_addition: "",
    activities_integration: [],
    appendix_table: ""
  };

  // 1. Parse Objectives
  const objectivesMatch = text.match(/===BAT_DAU_MUC_TIEU===([\s\S]*?)===KET_THUC_MUC_TIEU===/);
  if (objectivesMatch && objectivesMatch[1]) {
    result.objectives_addition = objectivesMatch[1].trim();
  }

  // 2. Parse Materials
  const materialsMatch = text.match(/===BAT_DAU_HOC_LIEU===([\s\S]*?)===KET_THUC_HOC_LIEU===/);
  if (materialsMatch && materialsMatch[1]) {
    result.materials_addition = materialsMatch[1].trim();
  }

  // 3. Parse Appendix
  const appendixMatch = text.match(/===BAT_DAU_PHU_LUC===([\s\S]*?)===KET_THUC_PHU_LUC===/);
  if (appendixMatch && appendixMatch[1]) {
    result.appendix_table = appendixMatch[1].trim();
  }

  // 4. Parse Activities (Complex)
  const activitiesBlockMatch = text.match(/===BAT_DAU_HOAT_DONG===([\s\S]*?)===KET_THUC_HOAT_DONG===/);
  if (activitiesBlockMatch && activitiesBlockMatch[1]) {
    const rawActivities = activitiesBlockMatch[1].split('---PHAN_CACH_HOAT_DONG---');
    
    rawActivities.forEach(block => {
      const anchorMatch = block.match(/ANCHOR:\s*([\s\S]*?)(?=CONTENT:|$)/);
      const contentMatch = block.match(/CONTENT:\s*([\s\S]*?)$/);

      if (anchorMatch && anchorMatch[1] && contentMatch && contentMatch[1]) {
        result.activities_integration.push({
          anchor_text: anchorMatch[1].trim(),
          content: contentMatch[1].trim()
        });
      }
    });
  }

  return result;
}
