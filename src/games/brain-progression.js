import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const firstIndexOfSeries = 0;
const lastIndexOfSeries = 9;

const lowerRange = 5;
const upperRange = 50;

const stepOfProgression = 5;

const GenerateNumericalSeries = () => {
  const firstNumber = getRandomInt(lowerRange, upperRange);
  const series = [firstNumber];
  for (let ElementOfSeries = firstIndexOfSeries;
    ElementOfSeries < lastIndexOfSeries; ElementOfSeries += 1) {
    series.push(series[ElementOfSeries] + stepOfProgression);
  }
  return series;
};

const GenerateProgression = () => {
  const progression = GenerateNumericalSeries();
  const hiddenIndex = getRandomInt(firstIndexOfSeries, lastIndexOfSeries);
  const copyOfProgression = progression.slice();
  copyOfProgression[hiddenIndex] = '..';
  const toShowProgression = copyOfProgression.join(' ');
  return [`${progression[hiddenIndex]}`, toShowProgression];
};

export default () => runGame(task, GenerateProgression);
