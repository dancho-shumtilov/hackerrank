const s = '03:40:22AM'

function timeConversion(s) {
    let newTime = '';
    let hours = parseInt(s.substring(0,2))
    let minutes = s.substring(2,8)

    if (s[8] == 'P' || s[8] == 'p')  {
        if (hours != 12) {
            newTime = (hours+12) + minutes
            console.log(newTime);
        }
        else {            
            newTime = (hours) + minutes
            console.log(newTime);
        }
    }
    else {
        if (hours == 12) {
            newTime = '00' + minutes;
            console.log(newTime);
        }
        else if (hours > 9){
            newTime = hours + minutes;
            console.log(newTime);
        }
        else {
            newTime = '0' + hours + minutes
        }
    }

}

timeConversion(s)