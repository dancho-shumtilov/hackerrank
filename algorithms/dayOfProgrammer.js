const year = 1918;

function dayOfProgrammer(year) {
    let result = '';
    let daysNotLeap = 243;
    let dp = 256;
    let septemberDays = 0;

    if (year < 1918) {
        if (year % 4 == 0) {
            septemberDays = dp - daysNotLeap - 1;
        }
        else {
            septemberDays = dp - daysNotLeap;
        }
    }
    else if (year == 1918) {
        result = '26.09.1918'
        return result
    } 
    else if (year > 1918) {
        if (year % 400 != 0 && year % 100 == 0) {
            septemberDays = dp - daysNotLeap - 1;
        }
        else {
            septemberDays = dp - daysNotLeap;
        }
    }
    
    result = `${septemberDays}.09.${year}`
    console.log(result);
    return result
}

dayOfProgrammer(year)