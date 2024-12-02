import React from 'react';
import { Operation } from '../types/game';

interface QuestionDisplayProps {
  num1: number;
  num2: number;
  operation: Operation;
}

export function QuestionDisplay({ num1, num2, operation }: QuestionDisplayProps) {
  return (
    <div className="text-4xl font-bold mb-8">
      {num1} {operation === 'addition' ? '+' : '-'} {num2} = ?
    </div>
  );
}