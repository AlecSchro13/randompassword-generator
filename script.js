// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
var specialCase = ["!","@","#","$","%","^","&","*",")","("];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//created var for numbers, upper case letters, lower case letters, and special cases.

// Write password to the #password input
function generatePassword() {
  var passLength = parseInt(prompt("How many characters would you like your password to be?"));
  if (!passLength) {
    alert("must enter a number between 8 and 128");
//created alert prompt to pick a password length between 8 and 128 characters. 
  } else if (passLength < 8 || passLength > 128) {
  //made password length 
    alert("you must enter a number between 8 and 128");
    return null;
  } else {
    var confirmUp = confirm("Would you like to include uppercase letters?");
    var confirmLower = confirm("Would you like to include lower case letters?");
    var confirmNumbers = confirm("Would you like to include numbers?");
    var confirmSpecial = confirm("Would you like to include special characters?");
  };
//created var for alert and parameters of the password.
if (confirmUp===false && confirmLower===false && confirmNumbers===false && confirmSpecial===false) {
  choices = alert("You enter at least one character type.");
  return null;
//created alert to let user know they must select at least one parameter.
} else if (confirmUp && confirmLower && confirmNumbers && confirmSpecial) {
  choices = upperCase.concat(lowerCase, specialCase, numbers);
} else if (confirmUp && confirmLower && confirmNumbers) {
  choices = upperCase.concat(lowerCase, numbers);
} else if (confirmUp && confirmLower) {
  choices = upperCase.concat(lowerCase);
} else if (confirmUp && confirmNumbers) {
  choices = upperCase.concat(numbers);
} else if (confirmUp && confirmSpecial) {
  choices = upperCase.concat(specialCase);
} else if (confirmUp) {
  choices = upperCase;
} else if (confirmLower && confirmNumbers && confirmSpecial) {
  choices = lowerCase.concat(specialCase, numbers);
} else if (confirmLower && confirmNumbers) {
  choices = lowerCase.concat(numbers);
} else if (confirmLower && confirmSpecial) {
  choices = lowerCase.concat(specialCase);
} else if (confirmLower) {
  choices = lowerCase;
} else if (confirmNumbers && confirmSpecial) {
  choices = numbers.concat(specialCase);
} else if (confirmUp && confirmNumbers && confirmSpecial) {
  choices = upperCase.concat(numbers, specialCase);
//realized you couldn't make one with all the other cases except lower case so this is to let that scenario happen
} else if (confirmNumbers) {
  choices = numbers;
} else if (confirmSpecial) {
  choices = (specialCase);
}
//made sure all choices can be the only option picked. 
var password = [];
for (var i = 0; i < passLength; i ++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices)
}

var passwrd = password.join("");
userinput(passwrd);
return passwrd;

  };

function userinput(passwrd) {
  document.getElementById("password").textContent=passwrd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  passwrd = generatePassword();
  document.getElementById("password").placeholder = passwrd;
});
