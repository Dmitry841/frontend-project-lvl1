import readlineSync from 'readline-sync';
import { greeting, enterName } from './cli.js';

greeting();

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Quastion: ${randomNumber}`);
    const answer = readlineSync.question('You answer: ');
    const wrongAnswer1 = randomNumber % 2 !== 0 && answer === 'yes';
    const wrongAnswer2 = randomNumber % 2 === 0 && answer === 'no';
    if ((answer !== 'yes') && (answer !== 'no')) {
      console.log(`This is wrong answer ;(. \nLet's try again, ${enterName}!`);
      break;
    } if (wrongAnswer1) {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${enterName}!`);
      break;
    } if (wrongAnswer2) {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again,${enterName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    i += 1;
  }
  console.log(`Congratulations, ${enterName}`);
};

export default brainEven;
