'use strict';
let x = 1;
let y = 2;
let z = 3;

function catAndMouse(x, y, z) {
    let cat1 = Math.abs(z - x);
    let cat2 = Math.abs(z - y);

    if (cat1 > cat2) {
        return 'Cat B'
    }
    else if (cat2 > cat1) {
        return 'Cat A'
    }
    else return 'Mouse C'
}

catAndMouse(x, y, z)