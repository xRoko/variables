
const prompt = require('prompt-sync')();
const username = prompt ('What is your name?');

let userage = prompt ('Please, write your age here:');
const year = 2024 - userage;

console.log(`Hey ${username}, you were born in ${year}!`);