import runGame from '../index.js';
import GenerateRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  const primeNumber2 = 2;
  const primeNumber3 = 3;
  const correct = 'yes';
  const incorrect = 'no';
  if (num === 1) {
    return incorrect;
  }
  if (num === primeNumber2 || num === primeNumber3) {
    return correct;
  }
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return incorrect;
    }
  } return correct;
};

const generateData = () => {
  const resultAndAnswer = [];
  const lowerRange = 5;
  const upperRange = 50;
  const randomNumber = GenerateRandomNumber(lowerRange, upperRange);
  const result = isPrimeNumber(randomNumber);
  resultAndAnswer.push(result, randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, generateData);
