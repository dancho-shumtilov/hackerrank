'use strict';
const a = [1, 2, 2, 3, 1, 2]
// const a = [1, 2, 2, 3, 1, 2]

function pickingNumbers(a) {
    let result = 0;
    let maxTemp = 1;
    let separator = 0;

    for (let i = 0; i < a.length - 2; i++) {
        for (let j = i+1; j < a.length - 1; j++) {
            if (Math.abs(a[i] - a[j]) <= 1 && Math.abs(a[j] - a[j+1]) <= 1) {
                maxTemp++;                
            }
            else {
                separator++;
            }
            console.log(`${separator} ---> maxTemp: ${maxTemp}` );
            if (separator > 0) {
                if(maxTemp > result) {
                    result = maxTemp;
                }
                maxTemp = 1;
                separator = 0;
            }            
        }    
    }

    console.log(result);
    return result
}

pickingNumbers(a)