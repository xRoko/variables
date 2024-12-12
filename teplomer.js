// Program pro klasifikaci teploty
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Zadej teplotu v °C: ', (input) => {
    const temperature = parseFloat(input);

    if (isNaN(temperature)) {
        console.log('To není platné číslo.');
    } else {
        console.log(classifyTemperature(temperature));
    }

    rl.close();
});

function classifyTemperature(temp) {
    if (temp < 0) {
        return "Freezing";
    } else if (temp >= 0 && temp <= 15) {
        return "Cold";
    } else if (temp >= 16 && temp <= 25) {
        return "Moderate";
    } else {
        return "Hot";
    }
}