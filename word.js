const prompt = require('prompt-sync')();

console.log(``);
const original_word = (prompt('Prosím, zadaj lubovolne slovo:  '));

console.log(``);
console.log(`Povodné slovo je  "${original_word}" \n`);

console.log(`Nové slovo je  "${original_word}ka"`);