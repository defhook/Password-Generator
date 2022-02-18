// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Calling the function 
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

/* 
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

//Declaring a Function 
function generatePassword() {
  //return me my random password 
  var randomPass ; //Declaring a variable 

  //randomPass = "Test$123!"; //Assigning value to the varaible 

  var passwordLength = parseInt(window.prompt("Please enter password length from 8 to 128 characters ?"));
  console.log(passwordLength);
//&& - and 
//|| - or 

//if password length is less than 8 or its greater than 128 , show the prompt again 
  if (passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = parseInt(window.prompt("Please re-enter password length from 8 to 128 characters ?"));
    console.log("updated password length is " + passwordLength);
  }
  //password criteria 
  var includeLowerCase = window.confirm("Would you like to include lower case letters?");
  console.log("lowercase is " + includeLowerCase);
  
  var includeNumber = window.confirm("Would you like to include a number?");
  console.log("Number" + includeNumber);

  var includeSpecialCar = window.confirm("Would you like to include a special character?");
  console.log("Special Character" + includeSpecialCar )

  var includeUpperCase = window.confirm("Would you like to include upper case letters ?");
  console.log("includeUpperCase is " + includeUpperCase);
  
  if(includeLowerCase === false && includeNumber === false 
    && includeSpecialCar === false && includeUpperCase ==false){
      alert("Must select include one criteria [lower/upper/number/special]");

      includeNumber = window.confirm("Would you like to include a number?");
      includeSpecialCar = window.confirm("Would you like to include a special character?");
      includeLowerCase = window.confirm("Would you like to include lower case letters ?");
      includeUpperCase = window.confirm("Would you like to include upper case letters ?");
    }
    var allowedCharList = ""; 
    if(includeNumber === true){
      allowedCharList = allowedCharList + "0123456789"; 
    }
    if(includeSpecialCar === true){
      allowedCharList = allowedCharList + "!@#$%^&*()"; 
    }
    
    if(includeLowerCase === true){
      allowedCharList = allowedCharList + "abcdefghijklmnopqrstuvwxyz"; 
    }
    if(includeUpperCase === true){
      allowedCharList = allowedCharList+ "abcdefghijklmnopqrstuvwxyz".toUpperCase() ; 
    }
  

    console.log(allowedCharList); 


    //1. loop based on password length 
      // 1.1 Math.floor(Math.random() * ) //generate aa random number/index  
      //1.2 append the random letter to randomPass varaible 
      //1.3 randomPass = randomPass + randomletter; 

  return randomPass; //Calling the variable 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
