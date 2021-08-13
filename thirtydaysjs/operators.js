let meal_cost = 100;
let tip_percent = 15;
let tax_percent = 8;


function solve(meal_cost, tip_percent, tax_percent) {
    let result = Math.round(meal_cost + meal_cost*tip_percent/100 + meal_cost*tax_percent/100);
    console.log(result);
}

solve(meal_cost, tip_percent, tax_percent)

