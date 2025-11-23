
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  isLoading: boolean;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, isLoading }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50 overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70 scale-110 animate-[subtle-zoom_30s_infinite_alternate]"
        style={{ backgroundImage: 'url(https://image.pollinations.ai/prompt/rainy%20city%20night%20neon%20lights%20reflection%20makoto%20shinkai%20style%20anime%20lonely%20atmosphere?width=1920&height=1080&nologo=true)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 backdrop-blur-[1px]" />
      
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
        
        {/* Title Group */}
        <div className="mb-14 space-y-4">
            {/* Subtitle removed */}
            <h1 className="text-7xl md:text-9xl font-serif-sc font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                七百元
            </h1>
            <div className="h-px w-24 bg-white/30 mx-auto my-6"></div>
            <h3 className="text-2xl md:text-4xl font-serif-sc text-white/90 font-light tracking-wide">
                错过的约定
            </h3>
        </div>

        {/* Intro Text */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-serif-sc leading-loose mb-16 drop-shadow-md">
            “我订了房间，付了钱。<br/>
            但站在那条走廊里，我意识到这代价远超我所能承受。”
        </p>
        
        {/* Start Button */}
        <button
            onClick={onStart}
            disabled={isLoading}
            className={`
              group relative px-20 py-5 text-xl tracking-[0.3em] font-medium transition-all duration-700
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'}
            `}
        >
            <div className="absolute inset-0 border border-white/40 skew-x-12 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]" />
            <span className="relative z-10 text-white font-serif-sc">
                {isLoading ? '记忆读取中...' : '开启回忆'}
            </span>
        </button>

      </div>

       <style>{`
        @keyframes subtle-zoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default StartScreen;
