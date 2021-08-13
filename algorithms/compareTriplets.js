const a = [1,2,3];
const b = [3,2,1];

function compareTriplets(a, b) {
    let comparisArr = [0,0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            comparisArr[0]++
        } else if (a[i] < b[i]) {
            comparisArr[1]++
        }        
    }
    return comparisArr
}

compareTriplets(a, b)