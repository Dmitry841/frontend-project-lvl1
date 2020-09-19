import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome');
  const enterName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${enterName}!`);
};
export default greeting;
