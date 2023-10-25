// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
    function getPassword() {
    
// Allowed password variables
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specChars = "!@#$%^&*()-=+<>?/|':[]{}";
    var passChars = "";
    var random = "";

// Allows user to select a password length
    var keyLength = prompt(
        "Enter password length. 8-128 characters"
    );
    
// If inputs not acceptable
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("Invalid length. Password must be between 8 and 128 characters. Please enter valid password length.");        
        return;

// If inputs are acceptable
    } else {
    var bigs = confirm("Your password will include Uppercase letters.");
    var smalls = confirm("Your password will include Lowercase letters.");
    var nums = confirm("Your password will include Numbers.");
    var specs = confirm("Your password will include Special Characters.");
    }

    if (bigs) {
        passChars += uppercase;
    } 

    if (smalls) {
        passChars += lowercase;
    }
    if (nums) {
        passChars += numbers;
    }
    if (specs) {
        passChars += specChars;
    }

// For loop if input is not met. 
    for (i = 0; i < keyLength; i++) {

// Password generated
        random += passChars[Math.floor(Math.random() * passChars.length)]
    }
    return(random);
}

// Password injected.
    var passwordText = document.querySelector("#password");
    function writePassword(random) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = random;
}

// Add event listener to generate button.
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
