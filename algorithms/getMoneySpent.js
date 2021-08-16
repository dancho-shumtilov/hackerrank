'use strict'
let keyboards = [4];
let drives = [5];
let b = 5;

function getMoneySpent(keyboards, drives, b) {
    let maxSpent = 0;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxSpent) {
                maxSpent = keyboards[i] + drives[j]
            }            
        }        
    }

    console.log(maxSpent);    
    console.log(maxSpent != 0 ?  maxSpent : -1);

    return maxSpent != 0 ?  maxSpent :  -1;
}

getMoneySpent(keyboards, drives, b)