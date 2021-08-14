// const arr = [1, 4, 4, 4, 5, 3];
const arr = [1, 1, 2, 2, 3];

function migratoryBirds(arr) {
    let result = 0;
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
    // mapElements.entries().reduce((a,e) => {
    //     console.log(e[1] > a[1] ? e : a); 
    // })

    // console.log([...mapElements.entries()].reduce((a, e ) => e[1] > a[1] ? e : a))
    console.log([...mapElements.entries()].reduce((acc, red) => console.log(acc[1]) ))


    return result
}

migratoryBirds(arr)