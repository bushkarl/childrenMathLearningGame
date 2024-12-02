import React from 'react';
import { Operation } from '../types/game';

interface OperationToggleProps {
  operation: Operation;
  onOperationChange: (operation: Operation) => void;
}

export function OperationToggle({ operation, onOperationChange }: OperationToggleProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className={`px-4 py-2 rounded-lg font-semibold ${
          operation === 'addition'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onOperationChange('addition')}
      >
        Addition
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-semibold ${
          operation === 'subtraction'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onOperationChange('subtraction')}
      >
        Subtraction
      </button>
    </div>
  );
}