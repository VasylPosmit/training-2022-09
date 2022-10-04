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
        break;

    case '-':
         res = number1 - number2;
         filter(res);
        break;

    case '*':
         res = number1 * number2;
         filter(res);
        break;

    case '/':
         res = number1 / number2;
         filter(res);
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

//Fibonacci number 

function fib(val) {
  if ( val < 1 || val >17) { return "that will be to much or to low for me I'm lazy";
  } else if ( val == 1 ) {
    return 0; 
  } else if ( val < 3 ) {
      return 1;
  } else if ( val >= 3 ) {
      return  fib(val-1)+fib(val-2);
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
          console.log(resF);

        } 
      }
    } else {
      console.log("That number is too low, sorry");
    }
  }
}

   

