import React from 'react';

interface AnswerOptionsProps {
  options: number[];
  onSelectAnswer: (answer: number) => void;
  selectedAnswer: number | null;
}

export function AnswerOptions({ options, onSelectAnswer, selectedAnswer }: AnswerOptionsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {options.map((option) => (
        <button
          key={option}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors
            ${
              selectedAnswer === option
                ? 'bg-blue-500 text-white'
                : 'bg-white border-2 border-gray-200 hover:border-blue-500'
            }`}
          onClick={() => onSelectAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}