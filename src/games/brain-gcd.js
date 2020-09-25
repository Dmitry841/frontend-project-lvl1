import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const findAllDividers = (num) => {
  let div = 1;
  const dividers = [];
  while (div <= num) {
    if ((num) % div === 0) {
      dividers.push(div);
    }
    div += 1;
  }
  return dividers;
};
const commonDividers = (arrOfDiv1, arrOfDiv2) => {
  const commomDiv = arrOfDiv1.filter((div) => arrOfDiv2.includes(div));
  return commomDiv;
};

const lowerRange = 5;
const upperRange = 50;

const GenerateData = () => {
  const number1 = getRandomInt(lowerRange, upperRange);
  const number2 = getRandomInt(lowerRange, upperRange);
  const divOfNumber1 = findAllDividers(number1);
  const divOfNumber2 = findAllDividers(number2);
  const divOfBothNumbers = commonDividers(divOfNumber1, divOfNumber2);
  return [String(Math.max(...divOfBothNumbers)), `${number1}, ${number2}`];
};
export default () => runGame(task, GenerateData);
