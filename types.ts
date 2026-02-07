
export interface GeminiResponse {
  advice: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
