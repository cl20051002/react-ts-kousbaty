
export enum CharacterMood {
  NEUTRAL = 'NEUTRAL',
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  SHY = 'SHY',
  SURPRISED = 'SURPRISED'
}

export interface Choice {
  id: string;
  text: string;
  sentiment: 'romantic' | 'neutral' | 'cold' | 'bold' | 'shy' | 'sad' | 'heroic';
}

export interface SceneData {
  narrative: string; 
  dialogue?: string; 
  speaker?: string; 
  backgroundDescription: string; 
  characterMood?: CharacterMood; 
  choices: Choice[];
  isEnding: boolean;
  endingType?: 'good' | 'bad' | 'neutral';
}

export interface GameState {
  history: { role: 'user' | 'model'; parts: string }[];
  currentScene: SceneData | null;
  isLoading: boolean;
  gameStarted: boolean;
  gameEnded: boolean;
  backgroundImageUrl: string;
}

// 这里的 Prompt 仅作为参考，在离线模式下不会被发送
export const INITIAL_PROMPT = `
You are the sophisticated engine for a high-fidelity interactive Visual Novel.
`;
