'use strict';
let k = 3;
let a = [-1, -3, 4, 2];

function angryProfessor(k, a) {
    let goodStudents = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            goodStudents++        
        }        
    }

    if (goodStudents >= k) {
        return 'NO'        
    }
    else return 'YES'
}

angryProfessor(k, a)