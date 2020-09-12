import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'What number is missing in the progression?';
const toGenerateNumericalSeries = () => {
  const firstNumber = toGenerateRandomNumber();
  const Series = [firstNumber];
  for (let i = 0; i < 9; i += 1) {
    Series.push(Series[i] + 5);
  }
  return Series;
};

const toGenerateRandomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

const toGenerateProgression = () => {
  const resulAndAnswer = [];
  const progression = toGenerateNumericalSeries();
  const hiddenIndex = toGenerateRandomIndex(0, 9);
  const copyOfProgression = progression.slice();
  copyOfProgression[hiddenIndex] = '..';
  const toShowProgression = copyOfProgression.join(' ');
  resulAndAnswer.push(String(progression[hiddenIndex]), toShowProgression);
  return resulAndAnswer;
};

export default () => runGame(task, toGenerateProgression);

