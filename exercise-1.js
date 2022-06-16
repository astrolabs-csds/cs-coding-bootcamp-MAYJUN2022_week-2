// 1 - Use the prompt() function to prompt the user
//     to register their details. The details are:
//     (1) firstname, (2) lastname, (3) email, (4) phone
// 2 - Assign their answers to variables
// 3 - Use the alert() to confirm their details
//     Hint: use \n to add line breaks inside alert()

var firstname = prompt("Please enter first name: ");
var lastname = prompt("Please enter last name: ");


var email = prompt("Please enter email: ");
var phone = prompt("Please enter phone: ");

alert(
    "Thank you for registering:\n" + 
    "First name: " + firstname + "\n" +
    "Last name: " + lastname + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone
    );