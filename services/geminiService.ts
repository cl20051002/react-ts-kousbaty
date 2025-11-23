import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { SceneData, INITIAL_PROMPT } from "../types";

// 辅助函数：清洗 AI 返回的 JSON 字符串
function cleanJsonText(text: string): string {
  let cleaned = text.trim();
  // 去除 Markdown 代码块标记
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    // 硬编码 API Key 以确保在 StackBlitz 中可用
    const apiKey = "AIzaSyDViOZp3uwf-lGlmjGr2S1YvVuU5rVFSrQ";
    
    if (!apiKey) {
      console.error("API_KEY is missing!");
    }

    this.genAI = new GoogleGenerativeAI(apiKey || "");
    
    // 使用通用别名 gemini-1.5-flash 以避免 404
    this.model = this.genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });
  }

  async startNewGame(): Promise<SceneData> {
    try {
      const scenario = "开始游戏。场景：主角站在酒店房间门外，那是“那一夜”。外面下着雨。他已经转账了700块钱。他紧握着手机，心跳混合着欲望与羞耻。他无法鼓起勇气敲门。请用中文描述他内心剧烈的冲突、走廊潮湿的气味以及他的犹豫。";
      
      // 关键：将系统指令拼接到用户提示中，确保 AI 知道要返回 JSON
      const finalPrompt = INITIAL_PROMPT + "\n\n" + scenario;

      const result = await this.model.generateContent({
        contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.9,
        },
      });
      
      const response = await result.response;
      const text = response.text();

      if (!text) {
        throw new Error("Gemini returned empty text.");
      }

      return JSON.parse(cleanJsonText(text)) as SceneData;
    } catch (error) {
      console.error("Failed to start game:", error);
      throw error;
    }
  }

  async nextTurn(history: { role: 'user' | 'model', parts: string }[], userChoiceText: string): Promise<SceneData> {
    try {
        const chat = this.model.startChat({
            history: history.map(h => ({
                role: h.role,
                parts: [{ text: h.parts }]
            })),
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.9,
            }
        });

        const msg = `(System Reminder: Return valid JSON based on previous rules.) \n\n 我选择: "${userChoiceText}". 继续故事。如果这是一个逃跑或离开的选择，请立即执行时间跳跃，进入“重逢”的场景。`;
        
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = response.text();

        if (!text) {
             throw new Error("Gemini returned empty text.");
        }
        
        return JSON.parse(cleanJsonText(text)) as SceneData;
    } catch (error) {
        console.error("Failed to generate next turn:", error);
        throw error;
    }
  }
}

export const geminiService = new GeminiService();