const arr = [-4, 3, -9, 0, 4, 1];
// const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    let positiveCount = 0, negativeCount = 0, zerosCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++
        } else if (arr[i] == 0) {
            zerosCount++
        }
        else negativeCount++        
    }

    console.log((positiveCount/arr.length).toFixed(6));
    console.log((negativeCount/arr.length).toFixed(6));
    console.log((zerosCount/arr.length).toFixed(6));
}

plusMinus(arr)