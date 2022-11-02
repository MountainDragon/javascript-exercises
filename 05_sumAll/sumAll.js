const sumAll = function() {
let argArr = [...arguments];
argArr.sort(function(a,b){return a-b})
const min = argArr[0];
const max = argArr[1];

let result;

if(min >= 0 && max >= 0 && typeof(min) === "number" && typeof(max) === "number"){
    let sum = 0;
    for(let i=min; i<=max; i++){
        sum+=i;
    }
    result = sum;
}else{
    result = "ERROR";
}
return result;




};
sumAll("99", 5);
// Do not edit below this line
module.exports = sumAll;
