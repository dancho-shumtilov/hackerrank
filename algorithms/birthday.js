const s = [1, 2, 1, 3, 2];
const d= 3;
const m = 2;

function birthday(s, d, m) {
    let divideBar = 0;
    let tempSum = 0;

    if (s.length < m) {
        return 0
    }

    for (let i = 0; i < s.length - m + 1; i++) {
        for (let j = i; j < m + i; j++) {
            tempSum += s[j]            
        }    
        if (tempSum == d) {
            divideBar++
        }
        tempSum = 0;
    }
    console.log(divideBar);
    return divideBar
}

birthday(s, d, m)