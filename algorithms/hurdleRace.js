'use strict';
let k = 4;
let height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
    let potions = 0;
    let maxJump = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > k && height[i] > maxJump) {
            maxJump = height[i];
            potions = height[i] - k;
        }
    }

    console.log(potions);
    return potions
}

hurdleRace(k, height)