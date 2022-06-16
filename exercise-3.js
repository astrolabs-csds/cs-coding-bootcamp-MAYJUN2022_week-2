// 1 - Create a function called 'coffeeMachine' that
//     have the following parameters: 
//     (a) coffeeType               latte, americano, cappucino, flatwhite
//     (b) orderSize                small, medium, large
//     (a) sugarOption              true, false

// 2 - Program the function to take argument and push them
//     into an Array called 'theOrder'

// 3 - Program the function to return 'theOrder'

// (Bonus) - Allow the user to decide the values for the 'coffeeMachine'

// To test your solution, create three cups of coffee.


function coffeeMachine(coffeeType, orderSize, sugarOption) {
    var theOrder = [];
    theOrder.push(coffeeType);
    theOrder.push(orderSize);

    if (sugarOption == 'y') {
        theOrder.push(true);
    }
    else if (sugarOption == 'n') {
        theOrder.push(false);
    }
    else {
        theOrder.push('invalid');
    }
    

    return theOrder;
};


console.log(
    coffeeMachine(
        prompt("Enter coffee type: "),
        prompt("Enter size of order: "),
        prompt("Sugar [y]es or [n]o?")
    )
);