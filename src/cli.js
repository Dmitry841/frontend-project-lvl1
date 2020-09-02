import readlineSync from 'readline-sync';

console.log('Welcome');
const enterName = readlineSync.question('May I have your name? ');
const greeting = () => console.log(`Hello, ${enterName}!`);

export default greeting;
