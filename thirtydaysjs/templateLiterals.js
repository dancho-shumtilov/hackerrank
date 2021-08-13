let a = 2;
let b = 4;

function foo(strings, ...expression) {
    if (a < b) {
        console.log(strings[2])
    } else {
        console.log(strings[1])
    }
    if (a > 1) {
        expression[3] = 'Not Right!!!'
        console.log('This is ' + expression[3]);
    }
    if (a > 0) {
        console.log('This is ' + expression[1]);
    }
 
}

foo`First string ${a+b}
Second string ${a*b}
Third string ${b-a}`