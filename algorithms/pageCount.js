'use strict';
const n = 5;
const p = 4;

function pageCount(n, p) {
    let minimumTurns = 0;
    let turnsBack = 0;
    let turnsFront = 0;

    turnsFront = Math.ceil((p-1)/2);
    
    if (n%2 != 0 && (n - p == 1)) {
        return turnsBack = 0
    }
    else if (n%2 != 0) {
        turnsBack = Math.ceil((n-1-p)/2);
    }
    else turnsBack = Math.ceil((n-p)/2);

    turnsBack > turnsFront ? minimumTurns = turnsFront : minimumTurns = turnsBack
    
    console.log(`front ${turnsFront} ---- Back: ${turnsBack} ----> returns ${minimumTurns}`);
    return minimumTurns
}

pageCount(n, p)