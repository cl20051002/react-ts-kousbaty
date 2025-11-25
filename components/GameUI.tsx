import React, { useEffect, useState } from 'react';
import { GameUIProps, SceneData, Choice } from '../types';
import TypingText from './TypingText';   // 明确同级

const GameUI: React.FC<GameUIProps> = ({ scene, onChoiceSelected, isLoading }) => {
  const [showChoices, setShowChoices] = useState(false);
  const [bgImage, setBgImage] = useState('');

  const handleTextComplete = () => setShowChoices(true);

  useEffect(() => {
    setShowChoices(false);
    if (scene.backgroundDescription) {
      const stylePrompt =
        'Makoto Shinkai style, anime masterpiece, 8k, highly detailed, emotional lighting, cinematic';
      const encoded = encodeURIComponent(`${scene.backgroundDescription}, ${stylePrompt}`);
      setBgImage(
        `https://image.pollinations.ai/prompt/${encoded}?width=1920&height=1080&nologo=true&seed=${Math.floor(
          Math.random() * 1000
        )}`
      );
    }
  }, [scene.narrative]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none font-sans">
      <div
        key={bgImage}
        className="absolute inset-0 bg-cover bg-center animate-[subtle-zoom_30s_infinite_alternate]"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end">
        <div
          className={`
            w-full flex flex-col items-center gap-3 px-4 mb-6 z-20
            transition-all duration-700 ease-out
            ${showChoices && !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
          `}
        >
          {scene.choices.map((choice, idx) => (
            <button
              key={choice.id}
              onClick={() => onChoiceSelected(choice)}
              className="
                group relative overflow-hidden w-full max-w-2xl 
                bg-black/60 hover:bg-black/80
                backdrop-blur-md border border-white/20
                hover:border-blue-300/60
                text-white py-4 px-8 text-center
                shadow-[0_0_15px_rgba(0,0,0,0.5)] 
                transition-all duration-300 transform hover:scale-[1.01]
              "
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <span className="text-lg tracking-widest text-gray-100 group-hover:text-blue-100 transition-colors">
                {choice.text}
              </span>
              <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500/0 group-hover:bg-blue-400/80 transition-all duration-500" />
              <div className="absolute right-0 top-0 h-full w-[2px] bg-blue-500/0 group-hover:bg-blue-400/80 transition-all duration-500" />
            </button>
          ))}
        </div>

        <div className="w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-12 pb-8 px-4 md:px-20 lg:px-40 z-10">
          {scene.speaker && (
            <div className="transform translate-y-4 translate-x-2 z-20 relative">
              <span className="inline-block px-8 py-1 bg-gray-900/90 text-blue-200 font-bold text-xl tracking-widest shadow-lg border-t border-l border-r border-white/10 rounded-t-lg backdrop-blur-md">
                {scene.speaker}
              </span>
            </div>
          )}

          <div className="relative min-h-[160px] md:min-h-[200px] bg-gray-900/85 backdrop-blur-xl border border-white/10 shadow-2xl p-6 md:p-8 rounded-lg rounded-tl-none">
            {scene.narrative && scene.speaker && (
              <div className="mb-4 text-gray-400 text-sm md:text-base italic leading-relaxed">
                {scene.narrative}
              </div>
            )}

            <div className="text-xl md:text-2xl leading-relaxed text-gray-100 drop-shadow-sm">
              <TypingText text={scene.dialogue || scene.narrative} speed={30} onComplete={handleTextComplete} />
            </div>

            {showChoices && !isLoading && (
              <div className="absolute bottom-4 right-4 animate-bounce text-blue-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
              </div>
            )}

            {isLoading && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-blue-300/50">
                <span className="animate-pulse tracking-widest uppercase">故事生成中...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          0%   { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default GameUI;