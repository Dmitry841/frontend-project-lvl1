import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const lowerRange = 5;
const upperRange = 50;

const makeProgression = (firstMember, step) => {
  const progression = [firstMember];
  for (let index = 0; index < lengthOfProgression - 1; index += 1) {
    progression.push(progression[index] + step);
  }
  return progression;
};

const generateProgression = () => {
  const firstMember = getRandomInt(lowerRange, upperRange);
  const stepProgression = getRandomInt(lowerRange, upperRange);
  const progression = makeProgression(firstMember, stepProgression);
  const hiddenIndex = getRandomInt(0, lengthOfProgression - 1);
  const copyOfProgression = progression.slice();
  copyOfProgression[hiddenIndex] = '..';
  const question = copyOfProgression.join(' ');
  const answer = String(progression[hiddenIndex]);
  return [answer, question];
};

export default () => runGame(task, generateProgression);
