function solve(meal_cost, tip_percent, tax_percent) {
    var total;
    var tip = (tip_percent/100)*meal_cost;
    var tax = (tax_percent/100)*meal_cost;
    total = Math.round(meal_cost+tip+tax);
    console.log(total);
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
