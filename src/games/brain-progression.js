import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 9;

const lowerRange = 5;
const upperRange = 50;

const firstNumber = getRandomInt(lowerRange, upperRange);
const stepOfProgression = getRandomInt(lowerRange, upperRange);

const makeProgression = (firstNum, step) => {
  const progression = [firstNum];
  for (let index = 0; // если остaвить только длину прогрессии(L6), это число не стнет "мaгическим"?
    index < lengthOfProgression; index += 1) {
    progression.push(progression[index] + step);
  }
  return progression;
};

const generateProgression = () => {
  const progression = makeProgression(firstNumber, stepOfProgression);
  const hiddenIndex = getRandomInt(0, lengthOfProgression); // если остaвить только длину(L6)
  const copyOfProgression = progression.slice(); // прогрессии, это число не стнет "мaгическим"?
  copyOfProgression[hiddenIndex] = '..';
  const question = copyOfProgression.join(' ');
  const answer = String(progression[hiddenIndex]);
  return [answer, question];
};

export default () => runGame(task, generateProgression);
