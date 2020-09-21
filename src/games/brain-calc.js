import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const generateCalculate = () => {
  const sign = ['+', '-', '*'];
  const CalculateAndAnswer = [];
  const beginOfSign = 0;
  const endOfSign = 2;
  const RandomSign = sign[getRandomInt(beginOfSign, endOfSign)];
  const minNumber = 1;
  const maxNumber = 10;
  const randomNumber1 = getRandomInt(minNumber, maxNumber);
  const randomNumber2 = getRandomInt(minNumber, maxNumber);
  if (RandomSign === '+') {
    CalculateAndAnswer.push(String(randomNumber1 + randomNumber2),
      `${randomNumber1} + ${randomNumber2}`);
  } if (RandomSign === '-') {
    CalculateAndAnswer.push(String(randomNumber1 - randomNumber2),
      `${randomNumber1} - ${randomNumber2}`);
  } else {
    CalculateAndAnswer.push(String(randomNumber1 * randomNumber2),
      `${randomNumber1} * ${randomNumber2}`);
  }
  return CalculateAndAnswer;
};

export default () => runGame(task, generateCalculate);
