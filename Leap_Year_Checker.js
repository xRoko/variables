const prompt = require('prompt-sync')();

let number = parseInt(prompt('Please, enter any year:  '));

console.log('');

if ((!isNaN(number) && parseInt(number) !== 0)) {

    if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
        console.log(`'True' - it's leap year !!!`);
    } else {
        console.log(`'False' - it's not leap year !!!`);
    }
} else {
    console.log(`Entered year is not number or it's '0' !!!`);
}
