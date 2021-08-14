const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
// const ar = [1, 2, 3, 4, 5, 6];

function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                result++
            }
            
            console.log(`cycle ${i} -- ${j} ---->  result: ${result}`);
        }
    }

    console.log(result);
    return result
}

divisibleSumPairs(n, k, ar)