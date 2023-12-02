// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordCharacterCount;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordCharacterCount = prompt("Please select the desired password length, ranging from 8 to 128 characters.")
  console.log("Password length: " + passwordCharacterCount);

  if (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
    passwordCharacterCount = prompt("The password length must be between 8 and 128 characters")
    console.log("Password length: " + passwordCharacterCount)
  }
}