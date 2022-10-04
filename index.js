// index.js

// program for a simple calculator
let result;

// user input
const lazyness = parseFloat(prompt("Should I be lazy today? (yes/no) "));

switch (lazyness) {
  case "yes":
    //if its lazy, it will use the filter
    const min = parseFloat(prompt("Minimum? "));
    const max = parseFloat(prompt("I see... And the maximum?"));

    filter(res, min, max); //?
    
    break;
  case "no":
    console.log("As you wish... You'll make me work hard");
    //we could just put the basic functions/fibonacci into a function and call it here
    

    break;
}

const operator = prompt(
  "Enter operator ( either +, -, * or / ) and remember I am lazy "
);

// user numbers
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));



switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}

//calculator from console only with functions

function addNums(...nums) {
  let res = nums.reduce((num1, num2) => num1 + num2);
  return res;
}

function subNums(...nums) {
  let res = nums.reduce((num1, num2) => num1 - num2);
  return res;
}

function divNums(...nums) {
  let res = nums.reduce((num1, num2) => num1 / num2);
  return res;
}

function multiNums(...nums) {
  let res = nums.reduce((num1, num2) => num1 * num2);
  return res;
}

//Fibonacci
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");
function fibonacci(number) {
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

//Filter lazy

function filter(res, min, max) {
  if (isNaN(res)) {
    console.log("Just numbers");
  } else {
    if (res >= min) {
      if (res > max) {
        console.log("That's too much for me, sorry");
      } else {
        if (res % 1 === 0) {
          let resF = res.toFixed();
          console.log("I don't know... Must be something around " + resF);
        }
      }
    } else {
      console.log("That number is too low, sorry");
    }
  }
}
