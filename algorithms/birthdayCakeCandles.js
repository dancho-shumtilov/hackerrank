// const candles = [4,4,1,3];
const candles = [3, 2, 1, 3];


function birthdayCakeCandles(candles) {
    let tallestCandle = candles[0];
    let tallestRepeat = 1;
    
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] == tallestCandle) {
            tallestRepeat++; 
        }
        else if (candles[i] > tallestCandle) {
            tallestCandle = candles[i]
            tallestRepeat = 1;
        }                
    }

    console.log(candles);
    console.log(tallestCandle);
    console.log(tallestRepeat);
    return tallestRepeat;
}

birthdayCakeCandles(candles)