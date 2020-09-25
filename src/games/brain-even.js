import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

  const lowerRange = 1;
  const upperRange = 30;

const generateData = () => {
  const question = getRandomInt(lowerRange, upperRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => runGame(task, generateData);
