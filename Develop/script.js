// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Password criteria prompt: character length
  var passwordLength = window.prompt('Choose a password length between 8 and 128 characters?', '');

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log (parseInt(passwordLength));
  } else {
    window.alert('Please enter a valid password length!');
  }

  //Password criteria confirmation: character types
  var passwordLowercase = window.confirm('Would you like to include lowercase characters?','');
  console.log(passwordLowercase);

  var passwordUppercase = window.confirm('Would you like to include uppercase characters?','');
  console.log(passwordUppercase);

  var passwordNumeric = window.confirm('Would you like to include numeric characters?','');
  console.log(passwordNumeric);

  var passwordSpecial = window.confirm('Would you like to include special characters?','');
  console.log(passwordSpecial);

  //Gather all password criteria in one array
  var passwordCriteria = [passwordLength, passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial];
  console.log(passwordCriteria);

  var password = generatePassword();

  function generatePassword() {
   var lowercase = 'abcdefghijklmnopqrstuvwxyz';
   var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var numeric = '0123456789';
   var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-='; 

   
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);