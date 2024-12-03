const prompt = require('prompt-sync')();

const string = (prompt('Please, enter string with any quantity of symbols or letters:  '));


const connectedString = (string.replace(/\s+/g, '').toLowerCase());

const revers_string = connectedString.split('').reverse().join('');

console.log('');


if (connectedString === revers_string) {
    console.log(`"${string}" is palindrome string !!!`);

} else {
    console.log(`"${string}" is not palindrome string !!!`);
}