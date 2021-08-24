// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
var passwordLength = prompt("Choose a password length ranging from 8 to 128 characters?");
console.log(passwordLength);
var passwordLowercase = confirm ("Would you like to include lowercase characters?");
console.log(passwordLowercase);
var passwordUppercase = confirm ("Would you like to include uppercase characters?");
console.log(passwordUppercase);
var passwordNumeric = confirm ("Would you like to include numeric characters?");
console.log(passwordNumeric);
var passwordSpecial = confirm ("Would you like to include special characters?");
console.log(passwordSpecial);
alert("Here's your password: ******");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
