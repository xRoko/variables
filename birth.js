const prompt = require('prompt-sync')();

const username = prompt ('What is your name? ');

let userage = prompt ('Please, write your age here: ');

console.log('')

console.log(`Hey "${username}", you were born in ${2024 - userage}!`);