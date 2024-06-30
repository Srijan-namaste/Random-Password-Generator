const length = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function randomPasswordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-=+"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";
    
    if(length <= 0){
        console.log("Minimum length must be atleast 1");
    }
    if(allowedChars.length === 0){
        console.log("Atleast 1 character type need to be selected");
    }

    for(let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = randomPasswordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`)