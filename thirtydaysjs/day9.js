'use strict'
const n = 3;

function factorial(n) {
    let result = 1;
    function calcFactorial(n) {        
        if (n > 0) {
            result *= n
            console.log(`n = ${n} --> current result = ${result}`);
            n--;
            calcFactorial(n)
        }
    }
    calcFactorial(n)
    return result
}

factorial(n)