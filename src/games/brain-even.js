import runGame from '../index.js';
import GenerateRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateData = () => {
  const resultAndAnswer = [];
  const lowerRange = 5;
  const upperRange = 50;
  const randomNumber = GenerateRandomNumber(lowerRange, upperRange);
  const result = isEven(randomNumber) ? 'yes' : 'no';
  resultAndAnswer.push(result, randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, generateData);
