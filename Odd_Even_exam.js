const prompt = require('prompt-sync')();

let number = prompt('Please, write any number here:  ');

console.log('');

if ((!isNaN(number) && parseInt(number) !== 0)) {

    if (parseInt(number) % 2 === 0) {
        console.log(`Entered number is "ODD"`);
    } else {
        console.log(`Entered number is "EVEN"`);
    }
} else {
    console.log(`Entered number is not number or '0'`);
}




