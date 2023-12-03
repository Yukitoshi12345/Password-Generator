// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordCharacterCount;

var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialCharacters;

// regex is used to match a string that contains only digits.
var regex = /^[0-9]+$/;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// There are 2 ways of producing upperCase. One is simply:
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
// The other way is by using functions: 
function toUpperCase(lowerCase) {
  var empty = [];
  for (var char of lowerCase) {
    empty.push(char.toUpperCase());
  }
  return empty;
}

var upperCase = toUpperCase(lowerCase);
// To test upperCase runs properly:
console.log(upperCase);

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// To test the specialCharacter runs properly:
console.log(specialCharacter);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordCharacterCount = window.prompt("Please select the desired password length, ranging from 8 to 128 characters.")
  console.log("Password length: " + passwordCharacterCount);
  
  // If you leave the answer blank or non-numerical values, it alerts that a value is needed to proceed.
  if (!passwordCharacterCount || !regex.test(passwordCharacterCount)) {
    alert("Must be a value.");
  }  
 
  // If you leave the answer outside of 8-128, it alerts that a value between 8-128 is needed to proceed.
  else if (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
    alert("The password length must be between 8 and 128 characters.");
  }
 
  // If the entered is a value between 8-128, i.e. the criteria is met, it proceed to the next step.
  else {
    // Confirm if you want to have lower case in the generated password.
    confirmLowerCase = confirm("Do you want to include lower case letters?");
    console.log("Lower case: " + confirmLowerCase);
    // Confirm if you want to have upper case in the generated password.
    confirmUpperCase = confirm("Do you want to include upper case letters?");
    console.log("Upper case: " + confirmUpperCase);
    // Confirm if you want to have numbers in the generated password.
    confirmNumbers = confirm("Do you want to include numbers?");
    console.log("Number: " + confirmNumbers);
    // Confirm if you want to have special characters in the generated password.
    confirmSpecialCharacters = confirm("Do you want to include special characters?");
    console.log("Special Character: " + confirmSpecialCharacters);
  }
}
