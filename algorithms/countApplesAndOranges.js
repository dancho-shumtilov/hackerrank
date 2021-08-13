let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2,2,1];
let oranges = [5,-6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0;
    let countOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t ) {
            countApples++
        }        
    }

    for (let j = 0; j < oranges.length; j++) {
        if (b + oranges[j] >= s && b + oranges[j] <= t ) {
            countOranges++
        }        
    }

    console.log(countApples);
    console.log(countOranges);
}

countApplesAndOranges(s, t, a, b, apples, oranges)