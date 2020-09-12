import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const random = () => {
  const result = [];
  const randomNumber = toGenerateRandomNumber();
  if (randomNumber % 2 === 0) {
    result.push('yes', randomNumber);
    return result;
  } result.push('no', randomNumber);
  return result;
};

export default () => runGame(task, random);
