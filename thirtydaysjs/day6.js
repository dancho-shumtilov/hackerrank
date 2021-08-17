const input = `Hacker
rank`;

function processData(input) {
    let splStr = input.split('\n');
    let evenStr = '';
    let oddStr = '';
    
    for (const str of splStr) {
        for (let i = 0; i < str.length; i++) {
            if ([i] % 2 == 0) {
                evenStr += str[i]
            }
            else oddStr += str[i]        
        }
        console.log(`${evenStr} ${oddStr}`);
        evenStr = '';
        oddStr = '';
    }
} 

processData(input)
