
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameUI from './components/GameUI';
// 切换到新的 LLM Service
import { llmService } from './services/llmService';
import { GameState, Choice } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [],
    currentScene: null,
    isLoading: false,
    gameStarted: false,
    gameEnded: false,
    backgroundImageUrl: ''
  });

  const handleStartGame = async () => {
    setGameState(prev => ({ ...prev, isLoading: true }));
    try {
      const initialScene = await llmService.startNewGame();
      setGameState(prev => ({
        ...prev,
        gameStarted: true,
        isLoading: false,
        currentScene: initialScene,
        history: [{ 
            role: 'model', 
            parts: JSON.stringify(initialScene) 
        }]
      }));
    } catch (error) {
      console.error("Error starting game:", error);
      // 即使这里报错，llmService 内部也会处理 fallback，通常不会走到这里
      alert("游戏启动发生意外错误，请刷新重试。");
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleChoice = async (choice: Choice) => {
    if (!gameState.currentScene) return;

    setGameState(prev => ({ ...prev, isLoading: true }));
    
    const updatedHistory = [
      ...gameState.history,
      { role: 'user' as const, parts: choice.text }
    ];

    try {
      const nextScene = await llmService.nextTurn(updatedHistory, choice.text);
      
      setGameState(prev => ({
        ...prev,
        currentScene: nextScene,
        isLoading: false,
        gameEnded: nextScene.isEnding,
        history: [
            ...updatedHistory,
            { role: 'model', parts: JSON.stringify(nextScene) }
        ]
      }));
    } catch (error) {
      console.error("Error generating next turn:", error);
      alert("剧情生成失败，正在尝试恢复...");
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="relative w-screen h-screen bg-slate-900 text-white overflow-hidden font-sans">
      {!gameState.gameStarted ? (
        <StartScreen onStart={handleStartGame} isLoading={gameState.isLoading} />
      ) : (
        <>
           {gameState.currentScene && (
            <GameUI 
                scene={gameState.currentScene} 
                onChoiceSelected={handleChoice}
                isLoading={gameState.isLoading}
            />
           )}
           
           {gameState.gameEnded && gameState.currentScene && (
             <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 p-8 text-center transition-opacity duration-1000">
                <h2 className="text-5xl font-serif-sc mb-6 text-blue-200 drop-shadow-lg">
                    {gameState.currentScene.endingType === 'good' ? '美好的结局' : 
                     gameState.currentScene.endingType === 'bad' ? '遗憾的结局' : '剧终'}
                </h2>
                <div className="h-px w-32 bg-gray-600 mb-8"></div>
                <p className="max-w-2xl text-xl text-gray-300 leading-relaxed mb-12 font-serif-sc tracking-wide">
                    {gameState.currentScene.narrative}
                </p>
                <button 
                    onClick={() => window.location.reload()}
                    className="px-10 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white text-lg tracking-[0.2em] transition-all duration-300 font-serif-sc"
                >
                    重新开始
                </button>
             </div>
           )}
        </>
      )}
    </div>
  );
};

export default App;
