//example1
let str = "Hello World";
let words = str.trim().split(" ");
console.log(words);
let lastword = words[words.length-1];
console.log(lastword,+lastword.length);

//example 2
let str1 = " fly me to the moon "
let words1 = str1.trim();
let lastword1 = words1.split(" ");
lastword1 = lastword1[lastword1.length-1];
console.log(lastword1,+lastword1.length);
//example 3
function checkanagram(str,str1)
 {
    let newStr = str.trim().toLowerCase().split("").sort();
    let newStr1 = str1.trim().toLowerCase().split("").sort();
    console.log(newStr);
    console.log(newStr1);
    let joinedstr = newStr.join("");
    let joinedstr1 = newStr1.join("");
     console.log(joinedstr);
    console.log(joinedstr1);
    return joinedstr === joinedstr1;
  }
console.log(checkanagram("listen", "silent"));
console.log(checkanagram("hello", "world"));
