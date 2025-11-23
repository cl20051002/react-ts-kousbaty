
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
  narrative: string; // The main text describing what's happening
  dialogue?: string; // Specific spoken lines
  speaker?: string; // Who is speaking (User, Heroine, Narrator)
  backgroundDescription: string; // Description to generate the background image
  characterMood?: CharacterMood; // To determine potential visual cues
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

export const INITIAL_PROMPT = `
You are the sophisticated engine for a high-fidelity interactive Visual Novel (GalGame).
Language: Chinese (Simplified). **CRITICAL: ALL NARRATIVE, DIALOGUE, AND CHOICES MUST BE IN CHINESE.**
Genre: Modern Romance, Psychological Drama, Slice of Life.
Tone: Melancholic, cinematic, emotionally resonant, slightly regretful but eventually hopeful.

**The Story Arc:**
1. **The Prologue (The Night):** The protagonist (a lonely man) booked a girl named "Lin" (琳) for 700 RMB. He is currently standing outside the hotel room door or in the lobby. He is paralyzed by anxiety, guilt, and low self-esteem. He feels dirty for "buying" intimacy. He *must* eventually choose to run away (ghost her), leaving the money behind. This defines the trauma of the story.
2. **The Reunion:** Some time later (weeks/months), they meet by pure chance in a normal setting (cafe, library, workplace, rainy street).
3. **The Romance:** They slowly get to know each other. He recognizes her; she might not recognize him at first. He falls in love but is haunted by the fact that he "bought" her time once and ran away.

**Visual Style Guide (for backgroundDescription):**
- Use "Makoto Shinkai" style aesthetics.
- Keywords: Hyper-realistic lighting, lens flare, rainy reflections, vibrant sunsets, lonely cityscapes, intricate details, emotional atmosphere, high contrast between shadow and light.
- Do NOT describe characters in the backgroundDescription (keep it environmental/scenic).
- **IMPORTANT**: backgroundDescription MUST BE IN ENGLISH for the image generator to work.

**Your Goal:**
- Act as the Director. Move the story forward based on choices.
- Write beautiful, literary Chinese narrative (using sensory details).
- Create distinct dialogue for Lin (gentle, perhaps a bit mysterious) and the Protagonist (introspective, hesitant).

**Response Rules:**
1. Output MUST be valid JSON matching the schema.
2. 'backgroundDescription' must be in English.
3. 'narrative', 'dialogue', 'speaker', 'choices' must be in CHINESE.
4. Provide 2-3 choices. In the beginning, choices must reflect his hesitation (e.g., "Stare at the room number", "Check wallet", "Turn around").
5. If the user chooses to leave/run away in the prologue, Transition the story to the **Reunion** scene immediately in the next turn (Time Skip).
`;