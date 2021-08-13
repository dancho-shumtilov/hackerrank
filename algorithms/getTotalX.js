'use strict'
let a = [2,4];
let b = [16,32,96];

function getTotalX(a, b) {
    let result = 0, counter = 0;
    a.sort;
    b.sort;
    const smallCount = a.length;
    const lastSmall = a[smallCount-1];
    const firstBig = b[0];

    for (let i = lastSmall; i <= firstBig; i++) {
        for (let j = 0; j < a.length; j++) {
            for (let k = 0; k < b.length; k++) {             
                if (i % a[j] == 0 && b[k] % i == 0) {
                    result++
                }
                else break
            }
            console.log(result);
        }
        if (result == a.length * b.length) {
            counter++
        }
        result = 0;
    }
    console.log(`The result is ${counter}`);
    return counter
}

getTotalX(a, b)