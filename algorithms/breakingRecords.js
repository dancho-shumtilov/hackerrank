// const scores = [12,24,10,24];
const scores = [10,5,20,20,20,4,5,2,25,1];

function breakingRecords(scores) {
    let record = [0,0];
    let maxScore = scores[0];
    let minScore = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            record[0]++ 
        }
        else if (scores[i] < minScore) {
            minScore = scores[i]
            record[1]++
        }        
    }

    console.log(record);    
    return record
}

breakingRecords(scores)