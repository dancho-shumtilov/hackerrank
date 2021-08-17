'use strict';
let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let word = 'zaba';

function designerPdfViewer(h, word) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let area = 0;
    let letterIndex = 0;
    let intArea = 0;
    
    for (const letter of word) {
        letterIndex = alphabet.indexOf(letter);
        intArea = h[letterIndex] * word.length;
        console.log(intArea);
        if (intArea > area) {
            area = intArea;
        } 
    }

    console.log(area);
    return area;
}

designerPdfViewer(h, word)