// 1 - Built-in Functions
// alert("YOU HAVE A VIRUS!!!!");
// prompt("What is your name?");

// alert("This is line 1" + "\n" + "This is line 2")


// 2 - Variables
// var username = prompt("What is your name?");
// alert(username);





// 3.1 - Control Statements: If/Else
// ---------------- Example 1 ----------------
// var price = 1000;
// var budget = 1000;


// if (price <= budget) {
//     alert("Buy");
// } else {
//     alert("Don't buy");
// }

// ---------------- Example 2 ----------------
// iPhone 13, iPhone 12, iPhone 11
// 5500, 4700, 3500

// var userSelection = prompt("Enter product name: ")

// if (userSelection == "iPhone 13") {
//     alert(5500);
// }
// else if (userSelection == "iPhone 12") {
//     alert(4700);
// }
// else if (userSelection == "iPhone 11") {
//     alert(3500);
// }
// else {
//     alert("Product not available");
// }




// 3.2 - Control Statements: While
// var counter = 1;
// while(counter <= 10) {
//     console.log(counter);
//     counter++;
// }




// 3.3 - Control Statements: For
// ---------------- Example 1 ----------------
// for(var counter = 1; counter <= 10; counter++) {
//     console.log(counter);
// }


// ---------------- Example 2 ----------------

// var alphabet = ['A','B','C','D'];

// for (index in alphabet) {
//     console.log( alphabet[index] );
// };







// 4 - Operators
// =                        Assignment
// ==                       Comparison
// !=                       Not comparison
// ===                      Strict comparison
// <                        Less than
// >                        Greater than
// <=                       Less than or equal
// >=                       Greater than or equal
// ||                       OR
// &&                       AND
// !                        NOT
// +                        Add (concatenate for strings)
// -                        Subtract    
// *                        Multiply
// /                        Divide
// %                        Modulo




// 5 - Data Strucutres: Arrays
// ---------------- Example 1 ----------------
// var userData = [
//     "John",                     // 0
//     "Doe",                      // 1
//     "john@gmail.com",           // 2
//     "0601234567"                // 3
// ]

// /console.log( userData[2] );


// ---------------- Example 2 ----------------

// var usersData = [
//     ["John",    "Doe",      "john@gmail.com",       "0601234567"],
//     ["Jeff",    "Musk",     "musk@tesla.com",       "0507671727"],
//     ["Bill",    "Bezos",    "bezos@amazone.com",    "0557671727"],
// ]

// console.log( usersData[2][0]  );



// ---------------- Example 3 ----------------

// Methods
// .push(value)
// .pop()
// .unshift(value)
// .shift()
// .splice(startIndex, numToDelete, valuesToAdd)
// .find(function)
// .forEach(function)
// .mapfunction

// Property
// .length

// alphabet = [
//     "@",
//     "B",
//     "C",
//     ":)",
//     "D",
//     "$"
// ];


// alphabet.pop();         // remove "$"
// alphabet.push("E");     // add "E"

// alphabet.shift();       // remove "@" from the beginning
// alphabet.unshift("A")   // add "A" at the beginning


// console.log(alphabet); 




// 6 - Functions

// Declaring a function
// function addTwoNumbers(numA, numB) {
//     var result = 0;
//     result = numA + numB;
//     return result;
// }

// // Calling a function
// console.log(addTwoNumbers(5,6));




// 7 - Objects

// ---------------- Example 1 ----------------
// var companies = {
//     'Apple': {
//         'ceo': 'Tim Cook',
//         'origin': 'USA',
//         'products': ['electronic devices', 'software']
//     },
//     'Sony': {
//         'ceo': 'Kenichiro Yoshida',
//         'origin': 'Japan',
//         'products': ['electronic devices', 'gaming', 'media production']
//     },
//     'Tesla': {
//         'ceo': 'Elon Musk',
//         'origin': 'USA',
//         'products': ['electronic vehicles']
//     }
// };


// // Dot syntax
// console.log( companies.Apple.products );

// // Square bracket syntax
// console.log( companies['Apple']['products'] );


// ---------------- Example 2 ----------------
// var countries = {
//     'United Arab Emirates': 'Abu Dhabi',
//     'United States': 'Washington DC',
//     'Japan': 'Tokyo'
// };


// countries.United Arab Emirates         // This will not work

// countries['United Arab Emirates']      // Only this will work for spaces in keys




// 8 - Strings
// String methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
var country = 'japan';


country.length;             // returns 5
country.toUpperCase();      // returns 'JAPAN'
country[0]                  // returns 'j'

// country string will be turned into object
/*
country = {
    '0': 'j',
    '1': 'a',
    '2': 'p',
    '3': 'a',
    '4': 'n',
    'toUpperCase': function(){},
    'toLowerCase': function(){},
    ///...
    'length': 5
}
*/