// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharacterCount;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialCharacters;
var userPreference;

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
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// To test the specialCharacter runs properly:
console.log(specialCharacters);

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
    window.alert("Must be a value.");
  }  
 
  // If you leave the answer outside of 8-128, it alerts that a value between 8-128 is needed to proceed.
  else if (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
    window.alert("The password length must be between 8 and 128 characters.");
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
  };

  // If the user picks all 4 lower/upper/numeric/special-characters:
  if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialCharacters) {
    userPreference = lowerCase.concat(upperCase, numeric, specialCharacters);
    console.log(userPreference);
  }

  // If the user picks 3 from lower/upper/numeric/special-characters:

  // If the user didn't pick the lowercase:
  else if (confirmUpperCase && confirmNumbers && confirmSpecialCharacters) {
    userPreference = upperCase.concat(numeric, specialCharacters);
    console.log(userPreference);
  }

  // If the user didn't pick the uppercase:
  else if (confirmLowerCase && confirmNumbers && confirmSpecialCharacters) {
    userPreference = lowerCase.concat(numeric, specialCharacters);
    console.log(userPreference);
  }

  // If the user didn't pick numeric:
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacters) {
    userPreference = lowerCase.concat(upperCase, specialCharacters);
    console.log(userPreference);
  }

  // If the user didn't pick special-characters:
  else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
    userPreference = lowerCase.concat(upperCase, confirmNumbers);
    console.log(userPreference);
  }

  // If the user picks 2 from lower/upper/numeric/special-characters:
  
  // If the user didn't pick numeric and special-characters:
  else if (confirmLowerCase && confirmUpperCase) {
    userPreference = lowerCase.concat(upperCase);
    console.log(userPreference);
  }

  // If the user didn't pick uppercase and special-characters:
  else if (confirmLowerCase && confirmNumbers) {
    userPreference = lowerCase.concat(numeric);
    console.log(userPreference);
  }

  // If the user didn't pick uppercase and numeric:
  else if (confirmLowerCase && confirmSpecialCharacters) {
    userPreference = lowerCase.concat(specialCharacters);
    console.log(userPreference);
  }

  // If the user didn't pick lowercase and special-characters:
  else if (confirmUpperCase && confirmNumbers) {
    userPreference = upperCase.concat(numeric);
    console.log(userPreference);
  }

  // If the user didn't pick lowercase and numeric:
  else if (confirmUpperCase && confirmSpecialCharacters) {
    userPreference = upperCase.concat(confirmSpecialCharacters);
    console.log(userPreference);
  }

  // If the user didn't pick lowercase and uppercase:
  else if (confirmNumbers && confirmSpecialCharacters) {
    userPreference = numeric.concat(specialCharacters);
    console.log(userPreference);
  }

  // If the user picks only 1 from lower/upper/numeric/special-characters:
  
  // If the user didn't pick uppercase, numeric, and special-characters:
  else if (confirmLowerCase) {
    userPreference = lowerCase;
    console.log(userPreference);
  }

  // If the user didn't pick lowercase, numeric, and special-characters:
  else if (confirmUpperCase) {
    userPreference = upperCase;
    console.log(userPreference);
  }

  // If the user didn't pick lowercase, uppercase, and special-characters:
  else if (confirmNumbers) {
    userPreference = numeric;
    console.log(userPreference);
  }

  // If the user didn't pick lowercase, uppercase, and numeric:
  else if (confirmSpecialCharacters) {
    userPreference = specialCharacters;
    console.log(userPreference);
  }



}
