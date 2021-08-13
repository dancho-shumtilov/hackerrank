let arr1 = [1, 2, 3, 4, 10, 11]

function reduceArr(ar) {
    let result = ar.reduce((sum, currentValue) => sum += currentValue)
    console.log(result);
    return result
}

reduceArr(arr1);