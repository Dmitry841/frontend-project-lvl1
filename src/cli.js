import readlineSync from 'readline-sync';

console.log('Welcome');
export const enterName = readlineSync.question('May I have your name? ');
export const greeting = () => console.log(`Hello, ${enterName}!`);
