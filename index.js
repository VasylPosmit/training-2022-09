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
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
      
    default:
        console.log('Invalid operator');
        break;
}

//calculator from console only with functions

function addNums(...nums){
    let res = nums.reduce((num1, num2) => num1 + num2)
    return res
}

function subNums(...nums){
    let res = nums.reduce((num1, num2) => num1 - num2)
    return res
}

function divNums(...nums){
    let res = nums.reduce((num1, num2) => num1 / num2)
    return res
}

function multiNums(...nums){
    let res = nums.reduce((num1, num2) => num1 * num2)
    return res
}

//alert("HELLO ITS MY FIRST COMMIT");

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
function fibonacci (number){for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}}

// filters for the lazy calc

function filter(res) {
  if (isNaN(res)) {
    console.log("Just numbers");
  } else {
    if (res >= 0) {
      if (res > 1000) {
        console.log("That's too much for me, sorry");
      } else {
        if (res % 1 === 0) {
          let resF = res.toFixed();
          console.log("I don't know... Must be something around " + resF);
        }
      }
    } else {
      console.log("That's too slow, sorry");
    }
  }
}
