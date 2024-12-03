const prompt = require('prompt-sync')();

let number1 = parseInt(prompt('Please, enter first number:  '));
let number2 = parseInt(prompt('Please, enter second number:  '));
let number3 = parseInt(prompt('Please, enter third number:  '));

console.log('');

if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {

    if (number1 >= number2 && number1 >= number3) {
        console.log(`The biggest number is: ${number1} !!!`);

    } else if (number2 >= number1 && number2 >= number3) {
        console.log(`The biggest number is: ${number2} !!!`);

    } else {
        console.log(`The biggest number is: ${number3} !!!`);

    }
} else {
        console.log(`One of entered  is not a number !!!`);
    }
