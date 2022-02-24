// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Calling the function 
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


//Declaring a Function 
function generatePassword() {
  //return me my random password 
   randomPass = ""; 

  var passwordLength = parseInt(window.prompt("Please enter password length from 8 to 128 characters ?"));
  console.log(passwordLength);
//&& - and 
//|| - or 

//if password length is less than 8 or its greater than 128 , show the prompt again 
  if (passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = (window.prompt("Please re-enter password length from 8 to 128 characters ?"));
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
      alert("Must select one or more options from the following criteria: lower, upper, number, special characters!");

      includeNumber = window.confirm("Would you like to include a number?");
      includeSpecialCar = window.confirm("Would you like to include a special character?");
      includeLowerCase = window.confirm("Would you like to include lower case letters?");
      includeUpperCase = window.confirm("Would you like to include upper case letters?");
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
      allowedCharList = allowedCharList + "abcdefghijklmnopqrstuvwxyz".toUpperCase(); 
    }
  
    console.log(allowedCharList); 


    // loop for math variables
     for (var i = 0; i <= passwordLength -1; i++) {
       var randomNumber = Math.floor(Math.random() * allowedCharList.length);
       randomPass += allowedCharList.charAt(randomNumber);
       //console.log(randomNumber, passwordLength, randomPass.substring(0, passwordLength));
     }

     //document.getElementById("password").value = password;


  return randomPass;  
}


/* was unable to create working copy function
  function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  //document.execCommand("copy");
} */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
