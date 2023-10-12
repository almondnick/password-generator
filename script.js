function getPasswordLength() {
    var userInput = prompt("How many characters would you like your password to be?");
    if (userInput < 8) {
        alert("Your password must be at least 8 characters long.");
        window.location.reload(true);
    } else if (userInput > 128) {
        alert("Your password cannot exceed 128 characters in length.");
        window.location.reload(true);
    }
    return userInput;
}

function generatePassword() {
    var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specChars = ['!', '@', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '[', ']', '^', '_', '{', '}', '~'];
    var passwordArray = [];
    var passwordLength = getPasswordLength();

    var lowerCase = confirm("Would you like lowercase letters in your password?");
    if (lowerCase) {
        passwordArray = passwordArray.concat(lowerCaseChars);
    }
    var upperCase = confirm("Would you like uppercase letters in your password?");
    if (upperCase) {
        passwordArray = passwordArray.concat(upperCaseChars);
    }
    var numCase = confirm("Would you like numbers in your password?");
    if (numCase) {
        passwordArray = passwordArray.concat(numChars);
    }
    var specCase = confirm("Would you like special characters in your password?");
    if (specCase) {
        passwordArray = passwordArray.concat(specChars);
    }

    var passwordString = "";
    for (var i = 0; i < passwordLength; i++) {
        passwordString += passwordArray[Math.floor(Math.random() * (passwordArray.length))];
    }
    return passwordString;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);