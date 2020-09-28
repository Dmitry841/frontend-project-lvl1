import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const GetAllDividers = (num) => {
  const dividers = [];
  for (let div = 1; div <= num; div += 1) {
    if ((num) % div === 0) {
      dividers.push(div);
    }
  }
  return dividers;
};
const getGreatDivider = (DivNum1, DivNum2) => Math.max(...DivNum1
  .filter((div) => DivNum2.includes(div)));

const lowerRange = 5;
const upperRange = 50;

const GenerateData = () => {
  const number1 = getRandomInt(lowerRange, upperRange);
  const number2 = getRandomInt(lowerRange, upperRange);
  const divNumber1 = GetAllDividers(number1);
  const divNumber2 = GetAllDividers(number2);
  return [`${getGreatDivider(divNumber1, divNumber2)}`,
    `${number1}, ${number2}`];
};
export default () => runGame(task, GenerateData);
