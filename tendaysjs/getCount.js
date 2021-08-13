let objects = [
    {x:1, y:1},
    {x:2, y:3},
    {x:3, y:3},
    {x:3, y:4},
    {x:4, y:5},
];

function getCount(objects) {
    let result = 0;
    objects.forEach(element => {
        if (element.x == element.y) {
            result++
        }
        console.log(`the two element are ${element.x} and ${element.y} - we have ${result} matches`);
    });
    return result
}

getCount(objects)