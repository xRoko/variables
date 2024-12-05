const prompt = require('prompt-sync')();

let string1 = prompt('Please, enter string with any quantity of symbols or letters:  ');
let string2 = prompt('Please, enter string with any quantity of symbols or letters:  ');



console.log('');

const newString1 = Array.from(new Set(string1)).sort().join('');
const newString2 = Array.from(new Set(string2)).sort().join('');


if (newString1 === newString2) {
    console.log(`Both strings are anagrams to each other !!!`);

} else {
    console.log(`The strings consist of different letters !!!`);
}