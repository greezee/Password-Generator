// Assignment Code
var generateBtn = document.querySelector("#generate");

// the below two functions assign value to the output variables below and combine the user inputs to pick them randomly as seen starting at line 80. 
function randomInt(min, max){
  if(!max) {
    max=min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}


function getRandom(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {
 //creates window to ask for user input
 var userInput = window.prompt("Select the length of your password between 8-128 characters")
 // sets password length from user input through above window. 
 var passwordLength = parseInt(userInput)
 //error message for first window if user doesnt input numbers
 if (isNaN(passwordLength)) {
  window.alert("Value selected doesnt meet criteria")
  return
 } 
 //error message if user input is outside of acceptance criteria
 if(passwordLength < 8 || passwordLength > 128) {
  window.alert("Length must be 8-128 characters")
  return
 }


 //Created variables to confirm user inputs
 var useNumbers = window.confirm("Include Numbers?")
 var useSymbols = window.confirm("Include Symbols?")
 var useLowercase = window.confirm("Include Lowercase Letters?")
 var useUppercase = window.confirm("Include Uppercase Letters?")


 // created arrays containing possible password characters
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseLetters = []
 //contains the users selections of the above variables
  var userSelections = []


  // simplifies lowercaseLetters variable to prevent typing 26 letters over again in all Caps. 
  for (var i=0; i <lowercaseLetters.length; i++){
    uppercaseLetters[i] = lowercaseLetters[i].toUpperCase()
  }
 //adds user selections of above variables to the variable containing them
  if(useNumbers === true) {
    userSelections.push(numbers)
  } 

  if(useSymbols === true){
    userSelections.push(symbols)
  }

  if(useLowercase === true){
    userSelections.push(lowercaseLetters)
  }

  if(useUppercase === true){
    userSelections.push(uppercaseLetters)
  }
 //defaults to selecting numbers if user makes no selection
  if(userSelections === 0){
    userSelections.push(useNumbers)
  }

  var newPassword = ""
 // forms new password based on user selections and available outputs
  for(var i=0; i < passwordLength; i++){
    var randomList = getRandom(userSelections)
    var randomChar = getRandom(randomList)
    newPassword += randomChar
  }
 // finalizes function. will display new password in box on browser thanks to code below. 
  return newPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
