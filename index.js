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
