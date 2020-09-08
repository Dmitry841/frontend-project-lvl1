import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const random = () => {
  const randomNumber = toGenerateRandomNumber();
  const answer = () => {
    if (randomNumber % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  const result = [];
  result.push(answer(), randomNumber);
  return result;
};

runGame(task, random);
