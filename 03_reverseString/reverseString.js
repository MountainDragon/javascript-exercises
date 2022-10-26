const reverseString = function(str) {
let strArray = [];
strArray = str.split("");
let reversedArr = [...strArray];
reversedArr.reverse();
let reversedStr = reversedArr.join("")
return reversedStr;

};




// Do not edit below this line
module.exports = reverseString;
