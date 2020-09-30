import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 10;
const signs = ['+', '-', '*'];
const beginOfSign = 0;
const endOfSign = signs.length - 1;

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const generateData = () => {
  const sign = signs[getRandomInt(beginOfSign, endOfSign)];
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const answer = String(calculate(number1, number2, sign));
  const question = `${number1} ${sign} ${number2}`;
  return [answer, question];
};

export default () => runGame(task, generateData);
