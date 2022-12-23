// Assignment code here

var upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharOptions = ["!", "@", "#", "$", "%","^","&","*","?"];
function generatePassword () { 
  var txtPrompt = ["How long would you like your password to be?", "Must be more than 8 characters", "Must be less than 128 characters.","Choose what type of characters to be included in your password (must choose at least one)."];
  var passLength = prompt(txtPrompt[0]);
  
  if (passLength < 8) {
    alert(txtPrompt[1]);
  } else if (passLength > 128) {
    alert(txtPrompt[2]);
  } else {
    alert(txtPrompt[3]);
  }
  
  //lists confirm alerts after incorrect input above
  var lowerCase = confirm("Include lower case characters?");
  var upperCase = confirm("Include upper case characters?");;
  var specialChar = confirm("Include special characters?");;
  var number = confirm("Include numbers?");;
  
  if (!lowerCase && !upperCase && !specialChar && !number) {
    alert("Please select at least one option.");
  } else {
  }
  
}

//

//NUMBER GENERATOR
// (Math.floor(Math.random() * 10) )

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
