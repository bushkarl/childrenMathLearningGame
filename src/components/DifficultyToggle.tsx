import React from 'react';
import { Difficulty } from '../types/game';

interface DifficultyToggleProps {
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export function DifficultyToggle({ difficulty, onDifficultyChange }: DifficultyToggleProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className={`px-4 py-2 rounded-lg font-semibold ${
          difficulty === 10
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onDifficultyChange(10)}
      >
        Up to 10
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-semibold ${
          difficulty === 20
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onDifficultyChange(20)}
      >
        Up to 20
      </button>
    </div>
  );
}