import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = () => {
  const resultAndAnswer = [];
  const primeNumber2 = 2;
  const primeNumber3 = 3;
  const randomNumber = toGenerateRandomNumber();
  if (randomNumber === primeNumber2 || randomNumber === primeNumber3) {
    resultAndAnswer.push('yes', randomNumber);
    return resultAndAnswer;
  }
  for (let divider = 2; divider <= randomNumber / 2; divider += 1) {
    if (randomNumber % divider === 0) {
      resultAndAnswer.push('no', randomNumber);
      return resultAndAnswer;
    }
  } resultAndAnswer.push('yes', randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, isPrimeNumber);
