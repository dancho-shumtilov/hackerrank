'use strict';
const grades = [73,67,38,97];

function gradingStudents(grades) {
    let finalResult = 0;
    let result = [];

    for (let i = 0; i < grades.length; i++) {            
        let roundToNext = Math.ceil(grades[i]/5);

        if (grades[i] <= 37) {
            finalResult = grades[i]; 
        }
        else if (grades[i] > 37 && grades[i] <= 40) {
            finalResult = 40
        }
        else if ((roundToNext * 5 - grades[i]) < 3 ) {        
            finalResult = roundToNext * 5
        }
        else {
            finalResult = grades[i]
        }
        result.push(finalResult)
    }
    console.log(result);
    return result;    
}

gradingStudents(grades)