import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="flex items-center gap-2 text-xl font-semibold text-yellow-600">
      <Trophy className="w-6 h-6" />
      <span>Score: {score}</span>
    </div>
  );
}