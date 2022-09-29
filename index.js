// index.js
// program for a simple calculator
let result;


// user input
const operator = prompt('Enter operator ( either +, -, * or / ) and remember I am lazy ');

// user numbers
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        if(result > 1000) {
            console.log("its to much for me because I'm lazy!")
        }
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        if(result > 1000) {
            console.log("its to much for me because I'm lazy!")
        }
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        if(result > 1000) {
            console.log("its to much for me because I'm lazy!")
        }
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        if(result > 1000) {
            console.log("its to much for me because I'm lazy!")
        }
        break;
      
    default:
        console.log('Invalid operator');
        break;
}

