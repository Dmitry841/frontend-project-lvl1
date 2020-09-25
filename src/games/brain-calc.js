import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 10;
const signs = ['+', '-', '*'];
const beginOfSign = 0;
const endOfSign = signs.length - 1;

const getCalculate = (num1, num2, statement) => {
  switch (statement) {
    case '+':
      return [`${num1 + num2}`, `${num1} + ${num2}`];

    case '-':
      return [`${num1 - num2}`, `${num1} - ${num2}`];

    default:
      return [`${num1 * num2}`, `${num1} * ${num2}`];
  }
};

const generateData = () => {
  const RandomSign = signs[getRandomInt(beginOfSign, endOfSign)];
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  return getCalculate(number1, number2, RandomSign);
};

export default () => runGame(task, generateData);
