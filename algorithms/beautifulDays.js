'use strict';
let i = 13;
let j = 45;
let k = 3;

function beautifulDays(i, j, k) {
    let goodDays = 0;
    for (let x = i; x <= j; x++) {
        let reverseI = '';
        
        for (let z = x.toString().length - 1; z >= 0; z--) {
            reverseI += x.toString()[z]
        }

        if (Math.abs(x - parseInt(reverseI)) % k == 0 ) {
            goodDays++
        }        
    }

    console.log(goodDays);
    return goodDays
}

beautifulDays(i, j, k)