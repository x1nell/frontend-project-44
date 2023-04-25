import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const gcd = (x, y) => ((y === 0) ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));

  return [question, correctAnswer];
};

const runGCD = () => {
  run(description, generateRound);
};

export default runGCD;
