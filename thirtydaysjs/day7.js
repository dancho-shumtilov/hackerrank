'use strict';
let arr = [1,2,3,4];

function reverseArray (arr) {
    let reverseArr = '';
    const arrLength = arr.length;

    for (let i = arrLength-1; i >= 0; i--) {
        reverseArr += `${arr[i]} `
    }

    console.log(reverseArr);
    return reverseArr
}

reverseArray (arr)
