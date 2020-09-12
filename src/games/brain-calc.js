import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'What is the result of the expression?';

const toCalculate = () => {
  const sign = ['+', '-', '*'];
  const resultOfCalculate = [];
  const toGenerateRandomSign = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);
  const beginOfSign = 0;
  const endOfSign = 2;
  const RandomSign = sign[toGenerateRandomSign(beginOfSign, endOfSign)];
  const randomNumber1 = toGenerateRandomNumber();
  const randomNumber2 = toGenerateRandomNumber();
  if (RandomSign === '+') {
    resultOfCalculate.push(String(randomNumber1 + randomNumber2),
      `${randomNumber1} + ${randomNumber2}`);
  } if (RandomSign === '-') {
    resultOfCalculate.push(String(randomNumber1 - randomNumber2),
      `${randomNumber1} - ${randomNumber2}`);
  } else {
    resultOfCalculate.push(String(randomNumber1 * randomNumber2),
      `${randomNumber1} * ${randomNumber2}`);
  }
  return resultOfCalculate;
};

export default () => runGame(task, toCalculate);
