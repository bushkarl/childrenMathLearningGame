export type Operation = 'addition' | 'subtraction';
export type Difficulty = 10 | 20;

export interface Question {
  num1: number;
  num2: number;
  operation: Operation;
  correctAnswer: number;
  options: number[];
}