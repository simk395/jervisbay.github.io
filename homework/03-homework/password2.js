// Define function to generate password

function askForCriteria() {
    var passwordLength = prompt("How many characters do you want your password to be?  (Between 8 and 128 characters)");
    passwordLength = parseInt(passwordLength);



    // Check if password is numeric and between 8 and 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {

        // Check number of characters
        console.log("Password of " + passwordLength + " characters");

        // Ask if user wants different character types --> boolean values
        var lowerCase = confirm("Do you want a lowercase character in the password?");
        var upperCase = confirm("Do you want an uppercase character in the password?");
        var numeric = confirm("Do you want a numeric character in the password?");
        var specialCharacter = confirm("Do you want special characters in the password? !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    }

    // Rerun function if password length is invalid
    else {
        alert("Please try again");
        askForCriteria();
    }

    // Define variable for the characterSet which will store all the characters from which the password will be generated from.  Initially blank.
    var characterSet = '';

    // Define variables to store the full character sets for the different criteria
    var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericSet = "1234567890";
    var specialCharacterSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // Define character sets based on user inputs above, appending the created full character sets to characterSet
    if (lowerCase) {
        lowerCase = "yes";
        lowerCaseOutput = "lowercase characters";
        characterSet = characterSet + lowerCaseSet;
    } else {
        lowerCase = "no";
        lowerCaseOutput = "no lowercase characters";
        characterSet = characterSet;
    }

    if (upperCase) {
        upperCase = "yes";
        upperCaseOutput = "uppercase characters";
        characterSet = characterSet + upperCaseSet;
    } else {
        upperCase = "no";
        upperCaseOutput = "no uppercase characters";
        characterSet = characterSet;
    }

    if (numeric) {
        numeric = "yes";
        numericOutput = "numeric characters";
        characterSet = characterSet + numericSet;
    } else {
        numeric = "no";
        numericOutput = "no numeric characters";
        characterSet = characterSet;
    }

    if (specialCharacter) {
        specialCharacter = "yes";
        specialCharacterOutput = "special characters";
        characterSet = characterSet + specialCharacterSet;
    } else {
        specialCharacter = "no";
        specialCharacterOutput = "no special characters";
        characterSet = characterSet;
    }


    // Alert user to the kind of password he / she wants
    alert("You want a " + passwordLength + " character password with " + lowerCaseOutput + ", with " + upperCaseOutput + ", with " + numericOutput + ", and with " + specialCharacterOutput);

    // Check for proper character set based on inputs and console log it
    console.log("Lowercase: " + lowerCase);
    console.log("Uppercase: " + upperCase);
    console.log("Numeric: " + numeric);
    console.log("Special Characters: " + specialCharacter);
    console.log("This is the character set to be used: " + characterSet);

    // Define password variable that will initially be blank
    var password = '';

    // For loop, keeps going as long as i is shorter than user entered password length

    for (i = 1; i <= passwordLength; i++) {

        // Picking a random character from the character set
        var c = Math.floor(Math.random() * characterSet.length);

        // Appending the random character to the password
        password += characterSet.charAt(c)
    }

    // Console logging generated password to check
    console.log("This is the password: " + password);

    // Swapping out placeholder text in html file with generated password
    document.getElementById("passwordHolder").innerHTML = password;

    // This is the end of the askForCriteria function (like a wrapper)
}

// Creating a function to copy the generated password
function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("passwordHolder"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
}