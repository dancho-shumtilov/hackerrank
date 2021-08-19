'use strict';
let n = 3;

function viralAdvertising(n) {
    let numberOfLikes = 0;
    let receivers = 5;
    let temp = 0;
    let remains = 0;

    function calcRem(receivers) {
        while (n > 0) {
            temp = Math.floor(receivers / 2);
            numberOfLikes += temp;
            remains = temp*3;
            n--

            console.log(`RES: ${receivers} - SEND:${temp} -- REM:${remains} ----> ${numberOfLikes}`);
            calcRem(remains)
        }        
    }

    calcRem(receivers)
    console.log(numberOfLikes);
    return numberOfLikes
}

viralAdvertising(n)