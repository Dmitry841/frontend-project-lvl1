import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'What number is missing in the progression?';
const toGenerateNumericalSeries = () => {
  const firstNumber = toGenerateRandomNumber();
  const Series = [firstNumber];
  const stepOfProgression = 5;
  for (let ElementOfSeries = 0; ElementOfSeries < 9; ElementOfSeries += 1) {
    Series.push(Series[ElementOfSeries] + stepOfProgression);
  }
  return Series;
};

const toGenerateRandomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

const toGenerateProgression = () => {
  const resulAndAnswer = [];
  const progression = toGenerateNumericalSeries();
  const firstIndexOfSeris = 0;
  const LastIndexOfSeries = 9;
  const hiddenIndex = toGenerateRandomIndex(firstIndexOfSeris, LastIndexOfSeries);
  const copyOfProgression = progression.slice();
  copyOfProgression[hiddenIndex] = '..';
  const toShowProgression = copyOfProgression.join(' ');
  resulAndAnswer.push(String(progression[hiddenIndex]), toShowProgression);
  return resulAndAnswer;
};

export default () => runGame(task, toGenerateProgression);
