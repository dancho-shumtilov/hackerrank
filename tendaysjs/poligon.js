'use strict'

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    perimeter(arr) {        
        return this.arr.reduce((sum, current)=> {
           return sum += current
        })
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);

console.log(rectangle);
console.log(rectangle.perimeter()); 
