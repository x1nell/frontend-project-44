import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => number % 2 === 0;

export const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
