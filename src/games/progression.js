import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 2;
const maxStart = 10;
const minStep = 2;
const maxStep = 5;
const minLength = 5;
const maxLength = 10;
const cover = '..';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = getProgression(start, step, length);
  const hiddenElementIndex = getRandomIndex(progression);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = cover;
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;
