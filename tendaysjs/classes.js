class Rectangle {
    constructor(w,h) {
        this.w = w;
        this.h = h
    }
}

Rectangle.prototype.area = function(w,h) {
    return this.w*this.h
}

class Square extends Rectangle {
    constructor(width) {
        super(width);
        this.w = width;
        this.h = width;
    }

    area() {
        super.area(width, width);
    }
}

let t1 = new Rectangle(3,4)
let area1 = t1.area();
console.log(area1);


let t2 = new Rectangle(4,5);
let area2 = t2.area();

let s1 = new Square(3);
let a1 = s1.area()
console.log(a1);