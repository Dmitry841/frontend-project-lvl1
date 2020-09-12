import readlineSync from 'readline-sync';
import { greeting, enterName } from './cli.js';

greeting();

export const toGenerateRandomNumber = () => Math.floor(Math.random() * 20 + 1);

export const runGame = (task, expression) => {
  console.log(task);
  let i = 1;
  while (i <= 3) {
    const [answer, resultOfExpression] = expression();
    console.log(`Quastion: ${resultOfExpression}`);
    const answerOfUser = readlineSync.question('You answer: ');
    const AnswerOfLeader = `"${answerOfUser}" is wrong answer ;(. Correct answer was "${answer}".
    Let's try again, ${enterName}!`;
    if (answer === answerOfUser) {
      console.log('Correct!');
    } if (answer !== answerOfUser) {
      console.log(AnswerOfLeader);
      return;
    }
    i += 1;
  }
  console.log(`Congratulations, ${enterName}!`);
};
