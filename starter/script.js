// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to generate password with user input
function generatePassword() {
  (pwdLength = parseInt(
    prompt(`How long would you like your password to be? Min 10 characters`)
  )),
    (ifLowerCase = confirm(
      `Would you like your password to include lower case letters?`
    )),
    (ifUpperCase = confirm(
      `Would you like your password to include upper case letters?`
    )),
    (ifNumeric = confirm(`Would you like your password to include numbers?`)),
    (ifSpecialChar = confirm(
      `Would you like your password to include special characters? eg $@%&`
    ));
  console.log(pwdLength, ifLowerCase, ifUpperCase, ifNumeric, ifSpecialChar);
  getRandom(ifLowerCase, ifUpperCase, ifNumeric, ifSpecialChar);
}

// Function for getting a random element from an array
function getRandom(ifLowerCase, ifUpperCase, ifNumeric, ifSpecialChar) {
  const availableChars = [
    ...(ifLowerCase ? lowerCasedCharacters : []),
    ...(ifUpperCase ? upperCasedCharacters : []),
    ...(ifNumeric ? numericCharacters : []),
    ...(ifSpecialChar ? specialCharacters : []),
  ];
  for (let i = 0; i < pwdLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    console.log(randomIndex);
    password += availableChars[randomIndex];
  }

  alert(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return passwordText.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
