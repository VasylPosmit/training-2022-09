// index.js

alert("HELLO ITS MY FIRST COMMIT");

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
      console.log("That number is too slow, sorry");
    }
  }
}

//pull request
