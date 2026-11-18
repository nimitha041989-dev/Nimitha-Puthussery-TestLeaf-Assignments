function reversestr(str) {
    let lengthofstr = str.length;
    let newstr = "";
    for(let i=lengthofstr - 1; i>=0 ;i--)
    {
        newstr += str[i];        
    }
    console.log("The reversed newstr: " + newstr);
    return newstr;
}

function checkpalindrome(str) {
let strreverse = reversestr(str);
let isPalindrome = (strreverse === str);
return isPalindrome;
}
console.log(checkpalindrome("madam"));     // true
console.log(checkpalindrome("nimitha"));   // false
console.log(checkpalindrome("malayalam")); // true
console.log(checkpalindrome("mom"));       // true
console.log(checkpalindrome("dad"));       // true

