import React, { useState, useCallback } from 'react';
import { Operation, Question, Difficulty } from './types/game';
import { generateQuestion } from './utils/mathUtils';
import { OperationToggle } from './components/OperationToggle';
import { DifficultyToggle } from './components/DifficultyToggle';
import { QuestionDisplay } from './components/QuestionDisplay';
import { AnswerOptions } from './components/AnswerOptions';
import { ScoreDisplay } from './components/ScoreDisplay';
import { Brain } from 'lucide-react';

function App() {
  const [operation, setOperation] = useState<Operation>('addition');
  const [difficulty, setDifficulty] = useState<Difficulty>(10);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [previousQuestions, setPreviousQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    () => generateQuestion(operation, difficulty, [])
  );

  const handleNewQuestion = useCallback(() => {
    const newQuestion = generateQuestion(operation, difficulty, previousQuestions);
    setPreviousQuestions(prev => [...prev, currentQuestion]);
    setCurrentQuestion(newQuestion);
    setSelectedAnswer(null);
  }, [operation, difficulty, previousQuestions, currentQuestion]);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      handleNewQuestion();
    }
  };

  const handleOperationChange = (newOperation: Operation) => {
    setOperation(newOperation);
    setPreviousQuestions([]);
    setCurrentQuestion(generateQuestion(newOperation, difficulty, []));
    setSelectedAnswer(null);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    setPreviousQuestions([]);
    setCurrentQuestion(generateQuestion(operation, newDifficulty, []));
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Math Learning Game</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Choose Operation:</h2>
          <OperationToggle operation={operation} onOperationChange={handleOperationChange} />
          
          <h2 className="text-lg font-semibold text-gray-600 mb-4">Choose Difficulty:</h2>
          <DifficultyToggle difficulty={difficulty} onDifficultyChange={handleDifficultyChange} />
        </div>

        <div className="text-center mb-8">
          <QuestionDisplay
            num1={currentQuestion.num1}
            num2={currentQuestion.num2}
            operation={currentQuestion.operation}
          />
          
          <AnswerOptions
            options={currentQuestion.options}
            onSelectAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
          />

          <button
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold text-lg
              hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleAnswerSubmit}
            disabled={selectedAnswer === null}
          >
            Check Answer
          </button>
        </div>

        <ScoreDisplay score={score} />
      </div>
    </div>
  );
}

export default App;