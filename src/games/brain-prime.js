import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  const leastPrimeNum = 2;
  if (num < leastPrimeNum) {
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
  const question = getRandomInt(lowerRange, upperRange);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => runGame(task, generateData);
