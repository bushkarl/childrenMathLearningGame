import { Operation, Question } from '../types/game';

export const generateNumber = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};

export const generateOptions = (correctAnswer: number, max: number): number[] => {
  const options = new Set<number>([correctAnswer]);
  
  while (options.size < 8) {
    const randomNum = Math.max(0, Math.min(max, correctAnswer + Math.floor(Math.random() * 11) - 5));
    options.add(randomNum);
  }
  
  return shuffle(Array.from(options));
};

export const generateQuestion = (
  operation: Operation,
  max: number,
  previousQuestions: Question[]
): Question => {
  let num1: number, num2: number;
  
  do {
    num1 = generateNumber(max);
    num2 = generateNumber(max);
    
    if (operation === 'subtraction') {
      [num1, num2] = [Math.max(num1, num2), Math.min(num1, num2)];
    }
  } while (
    previousQuestions
      .slice(-3)
      .some(q => q.num1 === num1 && q.num2 === num2 && q.operation === operation)
  );

  const correctAnswer = operation === 'addition' ? num1 + num2 : num1 - num2;
  const options = generateOptions(correctAnswer, max * 2);

  return {
    num1,
    num2,
    operation,
    correctAnswer,
    options
  };
};

const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};