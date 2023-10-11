// Assignment Code
var generateBtn = document.querySelector("#generate");

 // Defined all variables needed and the arrays of characters to be used
 var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var specialChars = ['!', '@', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '[', ']', '^', '_', '{', '}', '~'];
 var passwordArray = [];

// Function to Select Number of Characters
function numberSelect() {
    var userInput = window.prompt("How many characters would you like your password to contain?");
    if (userInput < 8) {
        alert("Your password must be at least 8 characters long.");
    } else if (userInput > 128) {
        alert("Your password cannot be more than 128 characters long.");
    }
}

// Function to Select Characters Used
function characterSelect() {    
    // If then statements determine if characters are added
    var lowerCase = confirm("Do you want lowercase letters in your password?");
    if (lowerCase === true) {
        passwordArray = passwordArray.push(lowerCaseChars);
    }

    var upperCase = confirm("Do you want uppercase letters in your password?");
    if (upperCase === true) {
        passwordArray = passwordArray.push(upperCaseChars);
    }

    var numberCase = confirm("Do you want numbers in your password?");
    if (numberCase === true) {
        passwordArray = passwordArray.push(numberChars);
    }

    var specialCase = confirm("Do you want special characters in your password?");
    if (specialCase === true) {
        passwordArray = passwordArray.push(specialChars);
    }
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);