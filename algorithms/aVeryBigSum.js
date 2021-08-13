'use strict';
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    let bigSum =  BigInt(ar.reduce((sum, current) => sum += current));
    console.log(bigSum);
    return bigSum;
}

aVeryBigSum(ar)