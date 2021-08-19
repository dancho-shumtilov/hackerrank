let input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
`

function phoneCall(input) {
    const newStr = input.split('\n')
    let numbers = parseInt(newStr[0]);
    let queries = newStr.length - numbers - 1;
    let phoneBook = new Map();

    for (let i = 1; i <= numbers ; i++) {
        phoneBook.set(newStr[i].split(" ")[0], newStr[i].split(" ")[1])
    }
    
    for (let j = numbers+1; j <= queries + numbers; j++) {
        if (!phoneBook.has(newStr[j]) ) {
            console.log(`Not found`);
        }
        else console.log(`${newStr[j]}=${phoneBook.get(newStr[j])}`)        
    }
}

phoneCall(input)