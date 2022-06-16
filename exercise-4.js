// Part 1
var countries = [
    'afghanistan',
    'algeria',
    'brazil',
    'canada',
    'denmark'
];


// 1. Create a function 'capitalize' that will take a string as 
//    argument and convert ONLY the first character to an uppercase
//    letter
// function capitalize(stringArg) {
//     return stringArg[0].toUpperCase() + stringArg.slice(1,)
// }


// 2. Use the appropriate control statement to apply 'capitalize'
//    to every element in 'countries'

// for (index in countries) {
//     console.log(
//         capitalize( countries[index] )
//     )
// }






// Part 2
var countries_cities = [
    {
        'Afghanistan': 'Kabul'
    },
    {
        'United Arab Emirates': 'Abu Dhabi'
    }
];

// 1. Use console.log() to log the number of countries in 'countries_cities'
// console.log(countries_cities.length);

// 2. Update 'Canada' to have the city 'Ottawa'.
//    Hint: use either square bracket or dot syntax.
//    Note: this is an array of objects

countries_cities[3]['Canada'] = 'Ottawa';
// console.log( countries_cities[3] );


// Bonus. Extract all the cities and put the in an array called 'cities'
//    Hint: use the .values() method

var cities = [];

for (index in countries_cities) {

    countryObj = countries_cities[index];
    
    var city_arr = Object.values(
        countryObj
    );
    cities.push( city_arr[0] )
}

console.log( cities );

