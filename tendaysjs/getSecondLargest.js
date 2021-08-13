'use strict';

let nums = [2, 3, 6, 6, 5];
// let nums = [1, 2, 3, -5, 6];

function getSecondLargest(nums) {
    let secondLargest = 0, biggest = 0, temp = 0 ;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= secondLargest) {
            secondLargest = nums[i]
        }
        if (secondLargest == biggest) {
            secondLargest = temp;
        }
        if (secondLargest > biggest) {
            temp = biggest;
            biggest = secondLargest;
            secondLargest = temp;
        }
        console.log(`the biggest value is ${biggest} - seccond is ${secondLargest}`);
    }    

    return secondLargest;
}

getSecondLargest(nums)