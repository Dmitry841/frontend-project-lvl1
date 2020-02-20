import readlineSync from 'readline-sync';

const enterName = readlineSync.question('May I have your name? ')
export const greeting = 'Hello, ' + enterName + '!'
console.log(greeting);



