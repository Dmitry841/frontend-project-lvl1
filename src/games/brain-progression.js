import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 9;

const lowerRange = 5;
const upperRange = 50;

const makeProgression = (firstMember, step) => {
  const progression = [firstMember];
  for (let index = 0; // если остaвить только длину прогрессии(L6), это число не стнет "мaгическим"?
    index < lengthOfProgression; index += 1) {
    progression.push(progression[index] + step);
  }
  return progression;
};

const generateProgression = () => {
  const firstMember = getRandomInt(lowerRange, upperRange);
  const stepProgression = getRandomInt(lowerRange, upperRange);
  // Есть смысл создавать константу или сразу функцию getRandomInt вставить в аргумент?
  // Если вставить в аргумент, как-будто читабельность ухудшится.
  const progression = makeProgression(firstMember, stepProgression);
  const hiddenIndex = getRandomInt(0, lengthOfProgression); // если остaвить только длину(L6)
  const copyOfProgression = progression.slice(); // прогрессии, это число не стнет "мaгическим"?
  copyOfProgression[hiddenIndex] = '..';
  const question = copyOfProgression.join(' ');
  const answer = String(progression[hiddenIndex]);
  return [answer, question];
};

export default () => runGame(task, generateProgression);
