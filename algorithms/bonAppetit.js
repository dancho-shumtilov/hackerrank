'use strict'
let bill = [3,10,2,9];
let k = 1;
let b = 7;

function bonAppetit(bill, k, b) {
    let anaShare = 0;

    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            anaShare += bill[i]
        }        
    }

    b - anaShare/2 == 0 ? console.log('Bon Appetit') : console.log(b - anaShare/2);

}

bonAppetit(bill, k, b)