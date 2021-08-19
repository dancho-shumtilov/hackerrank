'use strict';
let a = [3,4,5];
let k = 2;
let queries = [1,2]

function circularArrayRotation(a, k, queries) {
    for (let j = 0; j < k; j++) {
        let le = a.pop()
        a.unshift(le)
    }
    
    let finalArr = [];
    for (let i = 0; i < queries.length; i++) {
        finalArr.push(a[queries[i]])
    }

    
    console.log(finalArr);
    return finalArr
}

circularArrayRotation(a, k, queries)