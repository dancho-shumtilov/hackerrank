'use strict';
let n = 6;
let m = 87144204;
let s = 1;

function saveThePrisoner(n, m, s) {
    let chairNumber = 0;
    if (m == 1) {
        chairNumber = s;
    }
    else if (s + m <= n ) {
        chairNumber = s + m - 1 ;
    } else {
        chairNumber = s + (m % n) - 1;
        if (chairNumber == 0) {
            chairNumber = n
        }
        if (chairNumber > n) {
            chairNumber = chairNumber %  n
        }
    }

    console.log(chairNumber);
    return chairNumber
}

saveThePrisoner(n, m, s)