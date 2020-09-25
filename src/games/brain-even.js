import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

  const lowerRange = 1;
  const upperRange = 30;

const generateData = () => {
  const resultAndAnswer = [];
  const randomNumber = getRandomInt(lowerRange, upperRange);
  const result = isEven(randomNumber) ? 'yes' : 'no';
  resultAndAnswer.push(result, randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, generateData);
