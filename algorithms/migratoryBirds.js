// const arr = [1, 4, 4, 4, 5, 3];
const arr = [1, 1, 2, 2, 3];


function migratoryBirds(arr) {
    let mapElements = new Map;

    for (let i = 0; i < arr.length; i++) {
        if (!mapElements.has(arr[i])) {
            mapElements.set(arr[i], 1)
        }
        else {
            mapElements.set(arr[i], (mapElements.get(arr[i]))+1)
        }        
    }
    console.log(mapElements);
    
    // console.log([...mapElements.entries()].reduce((acc, current) => 
    //     current[1] > acc[1] ? current : acc
    // ))

    let maxValue = mapElements.entries().next().value[1];
    let maxKey = mapElements.entries().next().value[0];

    for (const el of mapElements) {                 
        if (el[1] == maxValue && el[0] < maxKey) {
            maxKey = el[0]
        }
        if (el[1] > maxValue) {
            maxValue = el[1];
            maxKey = el[0];
        }
        console.log(`maxKey: ${maxKey} ---> maxValue: ${maxValue}`)
    }

    console.log(maxKey);
    return maxKey
}

migratoryBirds(arr)