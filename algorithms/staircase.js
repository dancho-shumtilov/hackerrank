// const n = 6;
const n = 4;

function staircase(n) {    
    for (let i = 0; i < n; i++) {
        let temp = '';
        for (let j = 0; j < n; j++) {
            if (j < n-i-1) {                
                temp += ' ';
            }
            else temp += '#';
        }
        console.log(temp);
    }
}

staircase(n)