// Problem 2: Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string
// We start by writing out a function that take in a parameter
function vowelCount(str) {
    //Using the ARRAY method to input the vowel count
    const arrayOfVowels = ["a", "e", "i", "o", "u"];
    let currentVowelCount = 0;
    // Using toLowerCase so it match array of vowel
    const arrayOfLetters = str.toLowerCase().split("");
    //Using the for loop through each letter in the string
    for(let i = 0; i < arrayOfLetters.length; i++) {
        if(arrayOfVowels.includes(arrayOfLetters[i])) {
            currentVowelCount += 1;
        }
    }

    return currentVowelCount;
}

console.log(vowelCount("How many vowels do you see"));
