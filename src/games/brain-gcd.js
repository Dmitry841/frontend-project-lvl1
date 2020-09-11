import { toGenerateRandomNumber, runGame } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const tofindAllDividerS = (num) => {
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

const toGenerateGCD = () => { 
  const resultAndQuestion = [];
  const number1 = toGenerateRandomNumber();
  const number2 = toGenerateRandomNumber();
  const divOfNumber1 = tofindAllDividerS(number1);
  const divOfNumber2 = tofindAllDividerS(number2);
  const divOfBothNumbers = commonDividers(divOfNumber1, divOfNumber2);
  resultAndQuestion.push(String(Math.max(...divOfBothNumbers)), `${number1}, ${number2}`);
  return resultAndQuestion;
};
export default () => runGame(task, toGenerateGCD);
