let dateString = '11/10/2010';

function getDayName(dateString) {
    let dayName;
    let date = new Date(dateString);
    let dateStr = date.getDay();

    switch (dateStr) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;    
        default:
            dayName = 'Sunday';
            break;
    }
    
    console.log(dayName);
    return dayName;
}

getDayName(dateString)