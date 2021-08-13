'use strict';
let x1 = 2564;
let v1 = 5393;
let x2 = 5121;
let v2 = 2836;


function kangaroo(x1, v1, x2, v2) {
    let d1, d2;
    BigInt(d1 = x1 + v1);
    BigInt(d2 = x2 + v2);

    if (v1 == v2 ) {
        return 'NO'
    }

    if (d1 == d2 ) {
        return 'YES'
    }

    while (d1 < d2) {
        BigInt(d1 += v1);
        BigInt(d2 += v2);
        console.log(`${d1} -- ${d2}`);
        if (d1 == d2) {
            return 'YES'
        }
    }
    
    return 'NO'
}

kangaroo(x1, v1, x2, v2)