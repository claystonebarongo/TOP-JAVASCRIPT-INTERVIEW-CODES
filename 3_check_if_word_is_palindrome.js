//A palindrome is a word that reads the same backward as forward.ie racecar

//below is a function to check if word is palindrome

function isPalindrome(str){

   let reversedStr = str.split("").reverse().join("")

    return str === reversedStr
}

console.log(isPalindrome("madam"))  // output:true
console.log(isPalindrome("world"))  // output:false
console.log(isPalindrome("tennet")) // output:true