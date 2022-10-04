
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
         res = number1 + number2;
         filter(res);
        // console.log(`${number1} + ${number2} = ${res}`);
        console.log(res)
        
        break;

    case '-':
         res = number1 - number2;
         filter(res);
         console.log(res)
        break;

    case '*':
         res = number1 * number2;
         filter(res);
         console.log(res)
        break;

    case '/':
         res = number1 / number2;
         filter(res);
         console.log(res)
        break;
       
      
    default:
        console.log('Invalid operator');
        break;
}

//calculator from console only with functions

function addNums(...nums){
    let res = nums.reduce((num1, num2) => num1 + num2)
    return(filter(res),res)

    
}

function subNums(...nums){
    let res = nums.reduce((num1, num2) => num1 - num2)
    return(filter(res),res)
}

function divNums(...nums){
    let res = nums.reduce((num1, num2) => num1 / num2)
    return(filter(res),res)
}

function multiNums(...nums){
    let res = nums.reduce((num1, num2) => num1 * num2)
    return(filter(res),res)
}

//Fibonacci
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//Filter lazy

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
      console.log("That number is too low, sorry");
    }
  }
}