function reversestr(str) {
    let lengthofstr = str.length;
    let newstr = ""
    let splitstr = str.split("");
    for(let i=lengthofstr - 1; i>=0 ;i--)
    {
        newstr += splitstr[i];        
    }
   // console.log(splitstr); // this will print 'n', 'i', 'm','i', 't', 'h','a'
   console.log("The reversed newstr: " + newstr);//this will print The reversed newstr: ahtimin
}
reversestr("nimitha");
reversestr("madam");
reversestr("malayalam");
reversestr("mom");
reversestr("dad");
function checkpalindrome(str) {
    let lengthofstr = str.length;
    let newstr = "";
    for(let i=lengthofstr - 1; i>=0 ;i--)
    {
        newstr += str[i];
    }
    if(newstr === str) {
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
}
/* checkpalindrome("nimitha");
checkpalindrome("madam");
checkpalindrome("malayalam");
checkpalindrome("mom");
checkpalindrome("dad"); */
console.log(checkpalindrome("madam") ? "Palindrome" : "Not a palindrome"); 
console.log(checkpalindrome("nimitha") ? "Palindrome" : "Not a palindrome");
console.log(checkpalindrome("malayalam") ? "Palindrome" : "Not a palindrome");
console.log(checkpalindrome("mom") ? "Palindrome" : "Not a palindrome");
console.log(checkpalindrome("dad") ? "Palindrome" : "Not a palindrome");