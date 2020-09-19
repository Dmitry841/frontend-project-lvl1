import runGame from '../index.js';
import GenerateRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const generateCalculate = () => {
  const sign = ['+', '-', '*'];
  const CalculateAndAnswer = [];
  const beginOfSign = 0;
  const endOfSign = 2;
  const RandomSign = sign[GenerateRandomNumber(beginOfSign, endOfSign)];
  const minNumber = 1;
  const maxNumber = 10;
  const randomNumber1 = GenerateRandomNumber(minNumber, maxNumber);
  const randomNumber2 = GenerateRandomNumber(minNumber, maxNumber);
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
