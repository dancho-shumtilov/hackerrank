const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]

function diagonalDifference(arr) {
    let diagL = 0, diagR = 0, diagDifference = 0;
    
    let length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        diagL += arr[i][j];        
        length--;
        diagR += arr[i][length];
    }
    diagonalDifference = Math.abs(diagL - diagR);
    console.log(diagonalDifference);
    return diagonalDifference;
}

diagonalDifference(arr)