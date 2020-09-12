import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNumber = () => {
  const resultAndAnswer = [];
  const randomNumber = toGenerateRandomNumber();
  if (randomNumber === 2 || randomNumber === 3) {
    resultAndAnswer.push('yes', randomNumber);
    return resultAndAnswer;
  }
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      resultAndAnswer.push('no', randomNumber);
      return resultAndAnswer;
    }
  } resultAndAnswer.push('yes', randomNumber);
  return resultAndAnswer;
};

export default () => runGame(task, isPrimeNumber);
