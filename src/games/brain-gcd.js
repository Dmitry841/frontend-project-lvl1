import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getAllDividers = (num) => {
  const dividers = [];
  for (let divider = 1; divider <= num; divider += 1) {
    if ((num) % divider === 0) {
      dividers.push(divider);
    }
  }
  return dividers;
};
const getGreatDivider = (dividersNumber1, dividersNumber2) => Math.max(...dividersNumber1
  .filter((divider) => dividersNumber2.includes(divider)));

const lowerRange = 5;
const upperRange = 50;

const generateData = () => {
  const number1 = getRandomInt(lowerRange, upperRange);
  const number2 = getRandomInt(lowerRange, upperRange);
  const dividersNumber1 = getAllDividers(number1);
  const dividersNumber2 = getAllDividers(number2);
  const answer = String(getGreatDivider(dividersNumber1, dividersNumber2));
  const question = `${number1}, ${number2}`;
  return [answer, question];
};
export default () => runGame(task, generateData);
