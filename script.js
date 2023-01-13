var generateBtn = document.querySelector("#generate");

// For Generate button
generateBtn.addEventListener("click", writePassword);

//Input Variables
var inputs = [""];
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercases = "abcdefghiklmnopqrsttuvwxtz";
var numbers = "0123456789";
var specials = "!#'()*+,-./:;<=>?@[\]^_`{|}~";
var randomPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Prompt for Required length
  var passwordLength = prompt("Please determine the Desired Password Length. Minimum 8 and maximum 128 characters allowed.")

  //Lenght Validation
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error! Minimum 8 and maximum 128 characters allowed ONLY! Please Try Again.");
    return
  }

  //Confirmation Prompts for lowercase/uppercase/numbers/specials Characters
  var ConfirmLowercase = confirm("Include lowercase letters?");
  var ConfirmUppercase = confirm("Include uppercase letters?");
  var ConfirmNumber = confirm("Include numbers?");
  var ConfirmSpecials = confirm("Include special characters/symbols?");

   // Prompt when no character type selected.
  if (ConfirmLowercase === false && ConfirmUppercase === false && ConfirmNumber === false && ConfirmSpecials === false) {
    alert("Passwords must have at least one of the following: Uppercase Letters, Lowercase Letters, Numbers, or Special Characters/Symbols.")
    return;
  }

    if (confirmLowercase == true) {
      userChoices = userChoices.concat(Lowercase);
    }
    if (confirmUppercase == true) {
      userChoices = userChoices.concat(Uppercase);
    }
    if (confirmNumber == true) {
      userChoices = userChoices.concat(Numeric);
    }
    if (confirmSpecials == true) {
      userChoices = userChoices.concat(Specials);
    }

  for (var i = 0; i < passwordLength; i++) {
      var randomPassword = Math.floor(Math.random() * userChoices.length);
      var character = userChoices[randomPassword]
      console.log(character);
      char.push(character);
    }
  return randomPassword;
}
