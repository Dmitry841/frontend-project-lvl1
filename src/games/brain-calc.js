import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

 const minNumber = 1;
 const maxNumber = 10;

const generateData = () => {
  const sign = ['+', '-', '*'];
  const beginOfSign = sign[0]; // я думаю, что эта константа отностся к лексическому контексту.
  const endOfSign = sign[sign.length - 1];   // я думаю, что эта константа отностся к лексическому контексту.
  const RandomSign = sign[getRandomInt(beginOfSign, endOfSign)];
  const randomNumber1 = getRandomInt(minNumber, maxNumber);
  const randomNumber2 = getRandomInt(minNumber, maxNumber);
  if (RandomSign === '+') {
    return [String(randomNumber1 + randomNumber2),
      `${randomNumber1} + ${randomNumber2}`];
  } if (RandomSign === '-') {
    return [(String(randomNumber1 - randomNumber2),
      `${randomNumber1} - ${randomNumber2}`];
  } else {
    return [(String(randomNumber1 * randomNumber2),
      `${randomNumber1} * ${randomNumber2}`];
  }
};

export default () => runGame(task, generateData);
