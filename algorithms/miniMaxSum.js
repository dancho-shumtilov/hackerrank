const arr = [1, 2, 3, 4, 5];
// const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    const arrLength = arr.length;
    arr.sort();

    for (let i = 0;  i < arrLength - 1; i++) {
        minSum += arr[i];
        maxSum += arr[arrLength - i - 1];
    }

    console.log(minSum, maxSum);
}

miniMaxSum(arr)