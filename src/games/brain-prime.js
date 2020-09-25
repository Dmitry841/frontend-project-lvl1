import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  } for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  } return true;
};

const lowerRange = 5;
const upperRange = 50;

const generateData = () => {
  const resultAndAnswer = [];
  const randomNumber = getRandomInt(lowerRange, upperRange);
  const result = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  resultAndAnswer.push(result, randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, generateData);
