// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating variables for user choices
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("");
var special = "!@#$%^&*".split("");

// Write password to the #password input
function writePassword() {

//prompt for length of password
  var passwordLength = window.prompt("How many chacters would you like your password to be? (must be between 8 and 128 characters)")
  var userLength = parseInt(passwordLength);
  console.log(typeof userLength);

  //creating and empty array to store user input
  var array = [];
  
//validating the password length based on length requirements and ensuring it is a number
  if (passwordLength > 128 || passwordLength < 8) {
    window.alert("Password must be between 8 and 126 characters.")
    return writePassword();
  } 

  if (isNaN(passwordLength) === true) {
    window.alert("length must be a number")
    return writePassword();
  }

  //creating prompts for user choices of what to include in the password
  var lettersConfirm = window.confirm("Would you like lower case letters in your password?")
  var upperConfirm = window.confirm("Would you like upper case letters in your password")
  var numbersConfirm = window.confirm("Would you like numbers in your password?")
  var specialConfirm = window.confirm("Would you like special characters in your password?")
  
  //making sure user chooses at least one option
  if(lettersConfirm === false && upperConfirm === false && numbersConfirm === false && specialConfirm === false) {
    window.alert("Your password must contain letters, numbers, or special characters.")
    return writePassword();
  } 

  //adding user input into the empty array
  if (lettersConfirm === true) {
    array = array.concat(letters);
  }

  if (upperConfirm === true) {
    array = array.concat(upperLetters)
  }

  if (numbersConfirm === true) {
    array = array.concat(numbers);
  }

  if (specialConfirm === true) {
    array = array.concat(special);
  }

  //fuction that loops through the array at the users desired length
  function generatePassword() {
    var myPassword = [];
    for (var i = 0; i < userLength; i++) {
      var random = Math.floor(Math.random() * array.length);
      myPassword.push(array[random]);
      console.log(myPassword);
    }
    myPassword = myPassword.join("")
    console.log(myPassword);
    password = myPassword;
    return password;
  }

  //calling the generate password function above
  var password = generatePassword();

  //displaying the generated password on the DOM
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
