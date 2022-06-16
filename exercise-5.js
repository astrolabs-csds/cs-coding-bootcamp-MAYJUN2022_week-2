var coffee_machine = {
    "brand": null,
    "price": 200,
    "options": ['cafe creme', 'americano', 'black'],
    "power": function() {
        alert("Machine is on!")
    }
}


// 1. Change the brand from null to 'Nespresso'
coffee_machine['brand'] = 'Nespresso';

// 2. Increment the price by 300
coffee_machine['price'] += 300;

// 3. Add 'cappucino' to the 'options' array
coffee_machine['options'].push('cappucino');

// 4. Use console.log() to show the number of options
console.log( coffee_machine['options'].length );

// 5. Add an element to 'coffee_machine' with key 'owner' and value
//    will be your first name. For example { "owner": "John" }
coffee_machine['owner'] = "John";


// 6. Turn on the coffee machine by calling "power" function
//    Hint: to call a function, you must put () after the function reference  
coffee_machine['power']();