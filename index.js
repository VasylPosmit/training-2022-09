function fib(val) {
    if ( val < 1 ) { return "Input must be a number greater than 0.";
    } else if ( val == 1 ) {
        return 0; 
    } else if ( val < 3 ) {
            return 1;
    } else if ( val >= 3 ) {
            return fib(val-1)+fib(val-2);
    }
}