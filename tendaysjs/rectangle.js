const a = 4, b= 5;

function Rectangle(a, b) {
    const length = parseInt(a);
    const width = parseInt(b);
    const perimeter = 2*(length+width);
    const area = length*width;

    console.log(length);
    console.log(width);
    console.log(perimeter);
    console.log(area);
    
    return {
        length, width, perimeter, area
    }
}

Rectangle(a, b)
