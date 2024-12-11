/*

Description: Create a game where the user guesses a random number between 1 and 100.

Features:
Generate a random number using Math.random().
Allow the user to input guesses in the terminal.
Provide hints ("too high" or "too low").
End the game when the user guesses correctly.
Focus: Loops for repeated guesses and conditions for providing hints.

*/

const prompt = require('prompt-sync')();
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
console.log('Welcome to the number guessing game');

let number = parseInt(prompt('Guess the number between 1 and 100: '));

while (randomNumber !== number) {
    if (number > randomNumber) {
        console.log('Too high');

    } else if (number < randomNumber) {
        console.log('Too low');
    }

     number = parseInt(prompt('Guess the number between 1 and 100: '));
}

console.log('Yes, you win');