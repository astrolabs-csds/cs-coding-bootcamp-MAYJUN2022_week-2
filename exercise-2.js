// 1 - Use an appropriate control statement
//     to add up all of the prices and assign 
//     the total to 'total_price'

var total_price = 0;

var prices = [
    250,
    500,
    350,
    600,
    200,
    1200
];
// Your code here...

// for(var index = 0; index < 6; index++) {
//     total_price += prices[index]
// }

// console.log(total_price)




// 2 - Use an appropriate control statement
//     to add up all of the quantity and assign 
//     the total to 'total_qty'

// 3 - Add all of the product models to the
//     array 'product_models'

var total_qty = 0;
var product_models = []

var products = [
    ['Apple iPhone 13', 45],        // 0
    ['Samsung S20', 12],            // 1
    ['Huwaei P50 Pro', 6]           // 2
]

// Your code here...

// Solution to Part 2
for(var row = 0; row < 3; row++) {
    total_qty += products[row][1]
}

console.log(total_qty);



// Solution to Part 3
for(var row = 0; row < 3; row++) {
    product_models.push(products[row][0]);
}


console.log(product_models);
