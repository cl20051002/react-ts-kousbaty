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

// ===== 新增：组件 props =====
export interface GameUIProps {
  scene: SceneData;
  onChoiceSelected: (choice: Choice) => void;
  isLoading: boolean;
}

export interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
}

export interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const INITIAL_PROMPT = `
You are the sophisticated engine for a high-fidelity interactive Visual Novel.
`;