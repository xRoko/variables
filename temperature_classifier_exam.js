const prompt = require('prompt-sync')();

let temperature = parseInt(prompt('Please, enter temperature in C°= '));

console.log('');

if (temperature < 0) {
    console.log(`Outside is 'Freezing' !!!`);
} else if ((temperature >= 0) && (temperature <= 15)) {
    console.log(`Outside is 'Cold' !!!`);
} else if ((temperature >= 16) && (temperature <= 25)) {
    console.log(`Outside is 'Moderate' !!!`);
} else if (temperature > 25) {
    console.log(`Outside is 'HOT' !!!`);
}
